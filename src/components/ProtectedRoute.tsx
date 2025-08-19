"use client"

import { useAuth } from "@/context/AuthContext/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ allowedRoles, children }: { allowedRoles: string[], children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { authState } = useAuth()

  useEffect(() => {

    if (!authState.isCheckAuth) return

    const role = authState.user?.role || '';

    console.log(authState.user)

    if (!allowedRoles.includes(role)) {
      router.push("/logout");
    }

    setLoading(false);
  }, [authState.isCheckAuth]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};


export default ProtectedRoute;
