"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ allowedRoles, children }: { allowedRoles: string[], children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    // Lấy role từ token
    const role = getRoleFromToken(token);
    setUserRole(role);

    if (!allowedRoles.includes(role)) {
      router.push("/login");
    }

    setLoading(false);
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

const getRoleFromToken = (token: string): string => {
  try {
    const decoded: any = JSON.parse(atob(token.split(".")[1]));
    return decoded.role.name;
  } catch (error) {
    return "";
  }
};

export default ProtectedRoute;
