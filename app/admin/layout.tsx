"use client";

import Avatar from "@/components/avatar";
import Drawer from "@/components/drawer";
import {
  HomeIcon,
  TicketIcon,
  CalculatorIcon,
  HandThumbUpIcon,
  HomeModernIcon,
  CalendarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

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
    icon: HomeModernIcon,
  },
  {
    name: "Reservations",
    displayableName: "Reservas",
    href: "/admin/reservations",
    icon: CalendarIcon,
  },
  {
    name: "Requests",
    displayableName: "Solicitudes",
    href: "/admin/requests",
    icon: TicketIcon,
    submenu: [
      {
        name: "Budget",
        displayableName: "Presupuesto",
        href: "/admin/requests/budget",
        icon: CalculatorIcon,
      },
      {
        name: "Approval",
        displayableName: "Aprobación",
        href: "/admin/requests/approval",
        icon: HandThumbUpIcon,
      },
    ],
  },
  {
    name: "Payments",
    displayableName: "Pagos",
    href: "/admin/payments",
    icon: BanknotesIcon,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-base-300 px-3 py-3 md:flex-row md:overflow-hidden">
      <div className="hidden flex-none md:flex md:w-64">
        <Drawer menu={menu} />
      </div>
      <div className="grow p-4 md:overflow-y-auto md:px-12 py-3">
        <div className="h-20">
          <Avatar />
        </div>
        {children}
      </div>
    </div>
  );
}
