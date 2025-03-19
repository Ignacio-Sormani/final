"use client";

import "@/app/global.css";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="business" lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
