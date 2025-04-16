"use client";

import { BoardProvider } from "@/context/RouteContext/RouteContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div>
    <BoardProvider>{children}</BoardProvider>
  </div>
  );
}
