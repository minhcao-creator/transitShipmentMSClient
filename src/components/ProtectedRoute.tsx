"use client"

import { useAuth } from "@/context/AuthContext/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ allowedRoles, children }: { allowedRoles: string[], children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { authState } = useAuth()

  useEffect(() => {

    const role = authState.user?.role || '';

    if (!allowedRoles.includes(role)) {
      router.push("/login");
    }

    setLoading(false);
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};


export default ProtectedRoute;
