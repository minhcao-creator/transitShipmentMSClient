"use client"

import { UserProvider } from "@/context/UserContext/UserContext";
import ProtectedRoute from "@/components/ProtectedRoute"
import Analys from '@/assets/img/analys'
import Link from "next/link";
import Dashboard from "@/assets/img/dashboard";
import Logout from "@/assets/img/logout";
import Routing from "@/assets/img/routing";
import Geo from "@/assets/img/geo";
import { usePathname } from "next/navigation";
import { OrderStationProvider } from "@/context/OrderStationContext/OrderStationContext"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <ProtectedRoute allowedRoles={["hub-manager"]}>
      <div className="flex">
        <div className="h-screen px-2 py-24 flex flex-col justify-around items-center bg-cyan-800">
          <Link
            href="/hub-manager/gate"
            className={`p-2 rounded-md group ${pathname.startsWith("/hub-manager/gate") ? "bg-gray-100 text-gray-900" : "text-white hover:bg-gray-100"
              }`}
          >
            <Dashboard />
          </Link>
          <Link
            href="/hub-manager/map"
            className={`p-2 rounded-md group ${pathname.startsWith("/hub-manager/map") ? "bg-gray-100 text-gray-900" : "text-white  hover:bg-gray-100"
              }`}
          >
            <Geo />
          </Link>
          <Link
            href="/hub-manager/routes"
            className={`p-2 rounded-md group ${pathname.startsWith("/hub-manager/routes") ? "bg-gray-100 text-gray-900" : "text-white  hover:bg-gray-100"
              }`}
          >
            <Routing />
          </Link>
          <Link
            href="/hub-manager/order"
            className={`p-2 rounded-md group ${pathname.startsWith("/hub-manager/order") ? "bg-gray-100 text-gray-900" : "text-white  hover:bg-gray-100"
              }`}
          >
            <Analys />
          </Link>
          <Link
            href="/logout"
            className={`p-2 rounded-md group ${pathname === "/logout" ? "bg-gray-100 text-gray-900" : "text-white  hover:bg-gray-100"
              }`}
          >
            <Logout />
          </Link>
        </div>
        <div className="w-full">
          <UserProvider>
            <OrderStationProvider>
              {children}
            </OrderStationProvider>
          </UserProvider>
        </div>
      </div>
    </ProtectedRoute>
  );
}
