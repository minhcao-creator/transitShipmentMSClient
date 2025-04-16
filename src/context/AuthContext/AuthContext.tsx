'use client'

import { User } from "@/types/user";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

export const api = axios.create({
  baseURL: "http://localhost:4000/api/v1.0",
});

interface AuthContextType {
  token: string | null;
  user: User | undefined;
  isAxiosConfigured: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [isAxiosConfigured, setIsAxiosConfigured] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.replace("/login");
      return;
    }
    setToken(storedToken);
  }, []);

  useEffect(() => {
    if (!token) return;

    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    setIsAxiosConfigured(true);

    checkAuth();

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      setIsAxiosConfigured(false);
    };
  }, [token]);

  async function checkAuth() {
    try {
      const res = await api.get("users/profile")
      if (res.data) {
        setUser(res.data)
      }

    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        console.log("Token expired. Logging out...");
        localStorage.removeItem("token");
        setToken(null);
        router.replace("/login");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ token, user, isAxiosConfigured }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook để sử dụng AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
