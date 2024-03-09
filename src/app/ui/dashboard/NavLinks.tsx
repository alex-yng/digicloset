"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

type NavLink = {
  name: string;
  href: string;
};

interface NavLinksProps {
  links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <>
      {links.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            <button
              type='button'
              className={clsx(
                "py-1 px-2 md:py-2.5 md:px-5 w-full md:text-2xl font-medium text-gray-900 bg-white rounded-tr-lg rounded-bl-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-300",
                {
                  "!bg-gray-900": activeLink === link.name,
                }
              )}
              onClick={() => setActiveLink(link.name)}
            >
              {link.name}
            </button>
          </Link>
        );
      })}
    </>
  );
}
