"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react"
import UploadFile from '@/components/form/uploadFile'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  const [showUpload, setShowUpload] = useState<Boolean>(false)

  const tabs = [
    { href: "/hub-manager/order", label: "ĐƠN HÀNG" },
    { href: "/hub-manager/order/parcel", label: "KIỆN HÀNG" },
    { href: "/hub-manager/order/parcel/item", label: "MÓN HÀNG" },
  ]

  return (
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
        <button className="text-cyan-800 border border-cyan-800 rounded-sm hover:bg-[#116A7B] px-4 py-1 text-sm hover:text-white" onClick={() => setShowUpload(!showUpload)}>
          + Thêm tập tin
        </button>

        {showUpload && (
          <div className="absolute top-16 right-5 w-80 z-10">
            <UploadFile />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
