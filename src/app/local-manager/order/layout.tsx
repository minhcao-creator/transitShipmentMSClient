"use client";

import { OrderStationProvider } from "@/context/OrderStationContext/OrderStationContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OrderStationProvider>
      <div>
        {children}
      </div>
    </OrderStationProvider>
  );
}
