import {
  HomeIcon,
  TicketIcon,
  HomeModernIcon,
  CalendarIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

interface LinkProps {
  name: string;
  displayableName: string;
  href: string;
  icon: React.ElementType;
}

//! Update icons
export const adminMenu: LinkProps[] = [
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
    name: "Bookings",
    displayableName: "Reservas",
    href: "/admin/bookings",
    icon: CalendarIcon,
  },
  {
    name: "Requests",
    displayableName: "Solicitudes",
    href: "/admin/requests",
    icon: TicketIcon,
  },
  {
    name: "Payments",
    displayableName: "Pagos",
    href: "/admin/payments",
    icon: BanknotesIcon,
  },
];

export const adminMenuMap: Record<string, string> = {
  "/admin": "Admin Dashboard",
  "/admin/spaces": "Espacios",
  "/admin/reservations": "Reservas",
  "/admin/requests": "Solicitudes",
  "/admin/payments": "Pagos",
};

//! Update icons
export const superadminMenu: LinkProps[] = [
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

export const superadminMenuMap: Record<string, string> = {
  "/superadmin": "Superadmin Dashboard",
  "/superadmin/tickets": "Tickets",
  "/superadmin/institutions": "Instituciones",
  "/superadmin/spaces": "Espacios",
  "/superadmin/users": "Usuarios",
};
