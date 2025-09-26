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
import { useRouter } from "next/router";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <ProtectedRoute allowedRoles={["hub-manager"]}>
      <div className="flex">
        <div className="h-screen px-2 py-24 flex flex-col justify-around items-center bg-cyan-800">
          <Link href="/hub-manager/profile" className="w-10 h-10 text-gray-900 rounded-full hover:scale-110 transition-transform duration-200">
            <img
              src="/a.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-md group ${pathname.startsWith("/hub-manager/gate")
                ? "bg-gray-100 text-gray-900"
                : "text-white hover:bg-gray-100"
                }`}
            >
              <Dashboard />
            </button>

            {open && (
              <div className="text-mx absolute z-[9999] left-10 top-[-2px] bg-white rounded p-2 shadow-lg flex flex-col gap-2">
                <Link
                  href="/hub-manager/gate/inbound"
                  className={`p-1 rounded-sm group ${pathname.startsWith("/hub-manager/gate/inbound") ? "bg-[#562E1C] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  NHẬP
                </Link>
                <Link
                  href="/hub-manager/gate/outbound"
                  className={`p-1 rounded-sm group ${pathname.startsWith("/hub-manager/gate/outbound") ? "bg-[#006F62] text-white" : "hover:bg-gray-200"
                    }`}
                >
                  XUẤT
                </Link>
              </div>
            )}
          </div>
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
