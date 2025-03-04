"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface MenuProps extends LinkProps {
  submenu?: LinkProps[];
}

export default function Drawer({ menu }: { menu: MenuProps[] }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-3 w-64">
      <Link
        className="mb-2 flex h-40 items-end justify-start rounded-md bg-blue-600 p-4"
        href="/"
      >
        <div className="w-40 text-white"></div>
      </Link>
      <div className="flex h-full flex-col rounded-md bg-blue-200 p-2">
        <ul className="menu grow">
          {menu.length &&
            menu.map((link) => {
              const LinkIcon = link.icon;
              return (
                <li key={link.name} className="mb-2">
                  <Link
                    href={link.href}
                    className={`${pathname === link.href && "menu-active"}`}
                  >
                    <LinkIcon className="w-6" />
                    <p>{link.name}</p>
                  </Link>
                  {link.submenu && link.submenu.length && (
                    <ul>
                      {link.submenu.map((sublink) => (
                        <li key={sublink.name}>
                          <Link
                            href={sublink.href}
                            className={`${
                              pathname === sublink.href && "menu-active"
                            }`}
                          >
                            <LinkIcon className="w-6" />
                            <p>{sublink.name}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
        <div>
          <Link
            className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium bg-sky-100 hover:text-blue-600"
            href="/"
          >
            <div>Cerrar Sesión</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
