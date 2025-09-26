'use client'

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";

export const api = axios.create({
  baseURL: "http://localhost:4000/api/v1.0",
});

type AuthContextType = {
  user: {
    id: string;
    username: string;
    lastname: string;
    firstname: string;
    phoneNumber: string;
    citizenId?: string;
    email: string;
    driverLicenseNumber?: string;
    driverClass?: string;
    role: string;
    station?: string;
  } | undefined;
  isAxiosConfigured: boolean;
  isCheckAuth: boolean;
}

type AuthAction =
  | { type: "SET_AUTH"; payload: AuthContextType }

const initialData: AuthContextType = { user: undefined, isAxiosConfigured: false, isCheckAuth: false }

const AuthContext = createContext({
  authState: initialData,
  dispatch: (action: AuthAction) => { }
});

export const AuthProvider = ({ children }: PropsWithChildren) => {

  const [authState, dispatch] = useReducer(
    authReducer,
    initialData
  )

  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || '';

    if (!accessToken) {
      router.replace("/login");
      return;
    }

    const payload = accessToken.split('.')[1]

    const userId = JSON.parse(window.atob(payload)).id;

    checkAuth(userId)

  }, []);

  async function checkAuth(userId: string) {
    try {

      const res = await api.get(`users/${userId}`)

      if (res.data) {
        //console.log(res.data);
        dispatch({
          type: "SET_AUTH", payload: {
            user: {
              id: res.data.id,
              username: res.data.username,
              lastname: res.data.lastname,
              firstname: res.data.firstname,
              phoneNumber: res.data.phoneNumber,
              email: res.data.email,
              role: res.data.role.name,
              station: res.data.station.id,
            },
            isAxiosConfigured: true,
            isCheckAuth: true,
          }
        })
      }

    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        //console.log("Token expired. Logging out...");
        router.replace("/logout");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
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

function authReducer(state: AuthContextType, action: AuthAction): AuthContextType {
  switch (action.type) {
    case "SET_AUTH": {
      return action.payload
    }

    default:
      return initialData
  }
}