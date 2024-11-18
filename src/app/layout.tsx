import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Analys from '@/assets/img/analys'
import Link from "next/link";
import Dashboard from "@/assets/img/dashboard";
import Logout from "@/assets/img/logout";
import Routing from "@/assets/img/routing";
import Geo from "@/assets/img/geo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex bg-emerald-50">
          <div className="h-screen px-2 py-24 overflow-y-auto flex flex-col justify-around items-center bg-[#116A7B]">
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
          <div className="h-screen w-full">
            {children}
          </div>
        </div>




      </body >
    </html >
  );
}
