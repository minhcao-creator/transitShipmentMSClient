"use client";

import { OrderStationProvider } from "@/context/OrderStationContext/OrderStationContext";
import { useState } from "react"
import UploadFile from '@/components/form/uploadFile'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showUpload, setShowUpload] = useState<Boolean>(false)

  const pathname = usePathname()

  const tabs = [
    { href: "/local-manager/order", label: "ĐƠN HÀNG" },
    { href: "/local-manager/order/parcel", label: "KIỆN HÀNG" },
    { href: "/local-manager/order/parcel/item", label: "MÓN HÀNG" },
  ]

  return (
    <OrderStationProvider>
      <div className="h-screen m-4">
        <div className="flex justify-between py-4">
          <div className="flex gap-1 font-medium tracking">
            {tabs.map((tab) => {
              const active = pathname === tab.href
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-2 ${active
                    ? "text-cyan-950 border-b-2 border-cyan-950"
                    : "text-cyan-950 text-opacity-60 hover:border-b-2 hover:text-opacity-100 hover:border-cyan-950"
                    }`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </div>
          <div>
            <button className="text-cyan-800 border border-cyan-800 rounded-sm hover:bg-[#116A7B] px-4 py-1 text-sm hover:text-white" onClick={() => setShowUpload(!showUpload)}>
              + Tải đơn hàng
            </button>

            {showUpload && (
              <div className="absolute top-16 right-5 w-80 z-10">
                <UploadFile />
              </div>
            )}
          </div>

        </div>
        {children}
      </div>
    </OrderStationProvider>
  );
}
