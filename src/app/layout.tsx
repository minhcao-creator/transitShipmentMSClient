import type { Metadata } from "next";
import "./globals.css";
import Analys from '@/assets/img/analys'
import Link from "next/link";
import Dashboard from "@/assets/img/dashboard";
import Logout from "@/assets/img/logout";
import Routing from "@/assets/img/routing";
import Geo from "@/assets/img/geo";

export const metadata: Metadata = {
  title: "Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-montserrat'>
        <div className="flex bg-[#6B8071] bg-opacity-40">
          <div className="h-screen px-2 py-24 flex flex-col justify-around items-center bg-[#116A7B]">
            <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
              <Dashboard />
            </Link>
            <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
              <Geo />
            </Link>
            <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
              <Routing />
            </Link>
            <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
              <Analys />
            </Link>
            <Link href="#" className="p-2 text-gray-900 rounded-md hover:bg-gray-100 group">
              <Logout />
            </Link>
          </div>
          <div className="w-full overflow-hidden">
            {children}
          </div>
        </div>
      </body >
    </html >
  );
}
