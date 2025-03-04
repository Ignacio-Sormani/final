"use client";

import Avatar from "@/components/avatar";
import Drawer from "@/components/drawer";
import { usePathname } from "next/navigation";
import { superadminMenu, superadminMenuMap } from "@/utils/menu";

export default function SuperadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col bg-base-300 px-3 py-3 md:flex-row md:overflow-hidden">
      <div className="hidden flex-none md:flex md:w-64">
        <Drawer menu={superadminMenu} />
      </div>
      <div className="grow p-4 md:overflow-y-auto md:px-12 py-3">
        <div className="flex flex-row justify-between items-center h-20">
          <h1 className="w-1/2 text-4xl">
            {superadminMenuMap[pathname] || ""}
          </h1>
          <Avatar />
        </div>
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
}
