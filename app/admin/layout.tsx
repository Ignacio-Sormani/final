"use client";

import { usePathname } from "next/navigation";
import { adminMenu, adminMenuMap } from "@/lib/menu";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col bg-primary-content md:flex-row md:overflow-hidden">
      <div className="hidden flex-none md:flex md:w-64"></div>
      <div className="grow p-4 md:overflow-y-auto md:px-12 py-3">
        <div className="flex flex-row justify-between items-center h-20">
          <h1 className="w-1/2 text-4xl text-black">
            {adminMenuMap[pathname] || ""}
          </h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
