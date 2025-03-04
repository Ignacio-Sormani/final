import {
  HomeIcon,
  TicketIcon,
  CalculatorIcon,
  HandThumbUpIcon,
  HomeModernIcon,
  CalendarIcon,
  BanknotesIcon,
  QuestionMarkCircleIcon,
  FlagIcon,
  BuildingLibraryIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

//! Update icons
export const adminMenu = [
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

export const adminMenuMap: any = {
  "/admin": "Admin Dashboard",
  "/admin/spaces": "Espacios",
  "/admin/reservations": "Reservas",
  "/admin/requests": "Solicitudes",
  "/admin/requests/budget": "Solicitudes",
  "/admin/requests/approval": "Solicitudes",
  "/admin/payments": "Pagos",
};

//! Update icons
export const superadminMenu = [
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

export const superadminMenuMap: any = {
  "/superadmin": "Superadmin Dashboard",
  "/superadmin/tickets": "Tickets",
  "/superadmin/tickets/queries": "Consultas",
  "/superadmin/tickets/reports": "Reportes",
  "/superadmin/institutions": "Instituciones",
  "/superadmin/spaces": "Espacios",
  "/superadmin/users": "Usuarios",
};
