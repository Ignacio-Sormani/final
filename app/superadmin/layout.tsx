"use client";

import Drawer from "@/components/drawer";
import {
  HomeIcon,
  HomeModernIcon,
  TicketIcon,
  QuestionMarkCircleIcon,
  FlagIcon,
  BuildingLibraryIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

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
    icon: TicketIcon,
    submenu: [
      {
        name: "Queries",
        displayableName: "Consultas",
        href: "/superadmin/tickets/queries",
        icon: QuestionMarkCircleIcon,
      },
      {
        name: "Reports",
        displayableName: "Reportes",
        href: "/superadmin/tickets/reports",
        icon: FlagIcon,
      },
    ],
  },
  {
    name: "Institutions",
    displayableName: "Instituciones",
    href: "/superadmin/institutions",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Spaces",
    displayableName: "Espacios",
    href: "/superadmin/spaces",
    icon: HomeModernIcon,
  },
  {
    name: "Users",
    displayableName: "Usuarios",
    href: "/superadmin/users",
    icon: UsersIcon,
  },
];

export default function SuperadminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col bg-base-300 px-3 py-3 md:flex-row md:overflow-hidden">
      <div className="hidden flex-none md:flex md:w-64">
        <Drawer menu={menu} />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
