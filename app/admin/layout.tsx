"use client";

import Drawer from "@/components/drawer";
import { HomeIcon } from "@heroicons/react/24/outline";

const menu = [
  {
    name: "Admin Dashboard",
    displayableName: "Dashboard",
    href: "/admin",
    icon: HomeIcon,
  },
  {
    name: "spaces",
    displayableName: "Espacios",
    href: "/admin/spaces",
    icon: HomeIcon,
  },
  {
    name: "Reservations",
    displayableName: "Reservas",
    href: "/admin/reservations",
    icon: HomeIcon,
  },
  {
    name: "Requests",
    displayableName: "Solicitudes",
    href: "/admin/requests",
    icon: HomeIcon,
    submenu: [
      {
        name: "Budget",
        displayableName: "Presupuesto",
        href: "/admin/requests/budget",
        icon: HomeIcon,
      },
      {
        name: "Approval",
        displayableName: "Aprobación",
        href: "/admin/requests/approval",
        icon: HomeIcon,
      },
    ],
  },
  {
    name: "Payments",
    displayableName: "Pagos",
    href: "/admin/payments",
    icon: HomeIcon,
  },
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
