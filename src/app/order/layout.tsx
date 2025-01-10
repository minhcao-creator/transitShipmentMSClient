import { OrderProvider } from "@/context/OrderContext/OrderContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <OrderProvider>
        {children}
      </OrderProvider>
    </div>
  );
}
