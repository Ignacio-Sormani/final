"use client";

import Drawer from "@/components/drawer";
import { HomeIcon } from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", href: "/superadmin", icon: HomeIcon },
  {
    name: "Soporte",
    href: "/superadmin/soporte",
    icon: HomeIcon,
    submenu: [
      {
        name: "Consultas",
        href: "/superadmin/soporte/consultas",
        icon: HomeIcon,
      },
      {
        name: "Reportes",
        href: "/superadmin/soporte/reportes",
        icon: HomeIcon,
      },
    ],
  },
  { name: "Instituciones", href: "/superadmin/instituciones", icon: HomeIcon },
  { name: "Espacios", href: "/superadmin/espacios", icon: HomeIcon },
  { name: "Usuarios", href: "/superadmin/usuarios", icon: HomeIcon },
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
