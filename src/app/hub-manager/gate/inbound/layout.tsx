import { BoardProvider } from "@/context/RouteContext/RouteContextInBound";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "inbound",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:max-w-screen-xl mx-auto">
      <BoardProvider>{children}</BoardProvider>
    </div>

  );
}
