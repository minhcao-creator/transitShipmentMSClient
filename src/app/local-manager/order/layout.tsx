"use client";

import { OrderStationProvider } from "@/context/OrderStationContext/OrderStationContext";
import { useState } from "react"
import UploadFile from '@/components/form/uploadFile'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { api, useAuth } from "@/context/AuthContext/AuthContext";
import AlertComponent from "@/components/AlertComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showUpload, setShowUpload] = useState<Boolean>(false)
  const [alert, setAlert] = useState<{ type: string, message: string } | null>(null);

  const pathname = usePathname()

  const tabs = [
    { href: "/local-manager/order", label: "ĐƠN HÀNG" },
    { href: "/local-manager/order/parcel", label: "KIỆN HÀNG" },
    { href: "/local-manager/order/parcel/item", label: "MÓN HÀNG" },
  ]

  const { authState } = useAuth()

  const handleCreateTransitOrder = async () => {
    try {
      const res = await api.post('transit-orders/auto-create-transit-orders', {
        stationId: authState.user?.station
      })

      if (res.data) {
        setAlert({ type: "success", message: "Tạo chuyến hàng thành công" })
      }
    } catch (error) {
      console.log(error)
    }
  }

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
          <div className="flex gap-4">
            <div>
              <button className="border border-cyan-800 rounded-sm bg-[#116A7B] px-4 py-1 text-sm text-white hover:bg-cyan-900"
                onClick={handleCreateTransitOrder}

              >
                Tạo đơn trung chuyển
              </button>
            </div>

            <div>
              <button className="border border-cyan-800 rounded-sm bg-[#116A7B] px-4 py-1 text-sm text-white hover:bg-cyan-900" onClick={() => setShowUpload(!showUpload)}>
                Tải đơn hàng
              </button>

              {showUpload && (
                <div className="absolute top-16 right-5 w-80 z-10">
                  <UploadFile />
                </div>
              )}
            </div>
          </div>
        </div>
        {children}
        {
          alert && (
            <AlertComponent
              type={alert?.type}
              message={alert?.message}
              onClose={() => setAlert(null)}
            />
          )
        }
      </div>
    </OrderStationProvider>
  );
}
