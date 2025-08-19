import type { Metadata } from "next";
import ProtectedRoute from "@/components/ProtectedRoute"
import Analys from '@/assets/img/analys'
import Link from "next/link";
import Dashboard from "@/assets/img/dashboard";
import Logout from "@/assets/img/logout";
import Routing from "@/assets/img/routing";
import Geo from "@/assets/img/geo";

export const metadata: Metadata = {
  title: "local-manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute allowedRoles={["local-manager"]}>
      <div className="flex">
        <div className="h-screen px-2 py-24 flex flex-col justify-around items-center bg-cyan-800">
          <Link href="#" className="w-10 h-10 text-gray-900 rounded-full hover:scale-110 transition-transform duration-200">
            <img
              src="/a.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
          <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
            <Dashboard />
          </Link>
          <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
            <Geo />
          </Link>
          <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
            <Routing />
          </Link>
          <Link href="/order" className='p-2 text-gray-900 rounded-md hover:bg-gray-100 group'>
            <Analys />
          </Link>
          <Link href="/logout" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
            <Logout />
          </Link>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}
