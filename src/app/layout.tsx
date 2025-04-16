import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
import { OrderProvider } from "@/context/OrderContext/OrderContext";
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
      <body className="overflow-hidden">
        <div className="w-full overflow-hidden h-screen bg-cyan-900 bg-opacity-20 font-roboto">
          <AuthProvider>
            <OrderProvider>
              {children}
            </OrderProvider>
          </AuthProvider>
        </div>
      </body >
    </html >
  );
}
