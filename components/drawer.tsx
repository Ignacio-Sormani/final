"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

interface LinkProps {
  name: string;
  displayableName: string;
  href: string;
  icon: React.ElementType;
}

interface MenuProps extends LinkProps {
  submenu?: LinkProps[];
}

export default function Drawer({ menu }: { menu: MenuProps[] }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-3 w-64 bg-base-100 rounded-selector">
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md p-4"
        href="/"
      >
        <div className="w-full text-center">LOGO</div>
      </Link>
      <div className="h-1 bg-base-200" />
      <div className="flex h-full flex-col rounded-md p-2">
        <ul className="menu grow w-full">
          {menu.length &&
            menu.map((link) => {
              const LinkIcon = link.icon;
              return (
                <li key={link.name} className="mb-2">
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href &&
                      "bg-neutral text-neutral-content"
                    }`}
                  >
                    <LinkIcon className="w-6" />
                    <p>{link.displayableName}</p>
                  </Link>
                  {link.submenu && link.submenu.length && (
                    <ul>
                      {link.submenu.map((sublink) => {
                        const SublinkIcon = sublink.icon;
                        return (
                          <li key={sublink.name}>
                            <Link
                              href={sublink.href}
                              className={`${
                                pathname === sublink.href &&
                                "bg-neutral text-neutral-content"
                              }`}
                            >
                              <SublinkIcon className="w-6" />
                              <p>{sublink.displayableName}</p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
        <div>
          <Link
            className="flex h-[48px] w-full grow items-center justify-around gap-2 rounded-md p-3 text-sm font-medium bg-base-200 hover:bg-neutral hover:text-neutral-content"
            href="/"
          >
            Cerrar Sesión
            <ArrowLeftStartOnRectangleIcon className="w-6 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}
