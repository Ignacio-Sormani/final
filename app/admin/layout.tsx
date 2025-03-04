"use client";

import Drawer from "@/components/drawer";
import { HomeIcon } from "@heroicons/react/24/outline";

const menu = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  {
    name: "Espacios",
    href: "/admin/espacios",
    icon: HomeIcon,
  },
  { name: "Reservas", href: "/admin/reservas", icon: HomeIcon },
  {
    name: "Solicitudes",
    href: "/admin/solicitudes",
    icon: HomeIcon,
    submenu: [
      {
        name: "Presupuesto",
        href: "/admin/solicitudes/presupuesto",
        icon: HomeIcon,
      },
      {
        name: "Aprobación",
        href: "/admin/solicitudes/aprobacion",
        icon: HomeIcon,
      },
    ],
  },
  { name: "Pagos", href: "/admin/pagos", icon: HomeIcon },
];

export default function AdminLayout({
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
