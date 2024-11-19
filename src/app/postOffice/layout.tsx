"use client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div className="h-screen px-4 py-6">
    {children}
  </div>
  );
}
