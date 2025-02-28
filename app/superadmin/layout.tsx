"use client";

import Drawer from "@/components/drawer";
import { HomeIcon } from "@heroicons/react/24/outline";

const menu = [
  { name: "Home", href: "/superadmin", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/superadmin/invoices",
    icon: HomeIcon,
    submenu: [
      {
        name: "Completed",
        href: "/superadmin/invoices/completed",
        icon: HomeIcon,
      },
      {
        name: "Uncompleted",
        href: "/superadmin/invoices/uncompleted",
        icon: HomeIcon,
      },
    ],
  },
  { name: "Customers", href: "/superadmin/customers", icon: HomeIcon },
];

export default function SuperadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md: overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Drawer menu={menu} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
