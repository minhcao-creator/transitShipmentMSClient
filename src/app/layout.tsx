import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-hidden">
        <div className="w-full overflow-hidden h-screen bg-cyan-900 bg-opacity-20 font-inter">
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </body >
    </html >
  );
}
