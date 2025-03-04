"use client";

import Drawer from "@/components/drawer";
import { HomeIcon } from "@heroicons/react/24/outline";

const menu = [
  {
    name: "Superadmin Dashboard",
    displayableName: "Dashboard",
    href: "/superadmin",
    icon: HomeIcon,
  },
  {
    name: "Support",
    displayableName: "Tickets",
    href: "/superadmin/tickets",
    icon: HomeIcon,
    submenu: [
      {
        name: "Queries",
        displayableName: "Consultas",
        href: "/superadmin/tickets/queries",
        icon: HomeIcon,
      },
      {
        name: "Reports",
        displayableName: "Reportes",
        href: "/superadmin/tickets/reports",
        icon: HomeIcon,
      },
    ],
  },
  {
    name: "Institutions",
    displayableName: "Instituciones",
    href: "/superadmin/institutions",
    icon: HomeIcon,
  },
  {
    name: "Spces",
    displayableName: "Espacios",
    href: "/superadmin/spaces",
    icon: HomeIcon,
  },
  {
    name: "Users",
    displayableName: "Usuarios",
    href: "/superadmin/users",
    icon: HomeIcon,
  },
];

export default function SuperadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="hidden flex-none md:flex md:w-64">
        <Drawer menu={menu} />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
