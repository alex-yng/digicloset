"use client";

import Link from "next/link";
import { useState } from "react";
import { clsx } from "clsx";

type NavLink = {
  name: string;
  href: string;
  active: boolean;
};

interface NavLinksProps {
  links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <>
      {/* <Link href='/dashboard'>
        <button
          type='button'
          className='py-2.5 px-5 me-2 mb-2 w-full text-2xl font-medium text-gray-900 bg-white rounded-tr-lg rounded-bl-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-300'
        >
          Dashboard
        </button>
      </Link>
      <Link href='/dashboard/inventory'>
        <button
          type='button'
          className='py-2.5 px-5 me-2 mb-2 w-full text-2xl font-medium text-gray-900 bg-white rounded-tr-lg rounded-bl-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-300'
        >
          Closet
        </button>
      </Link>
      <Link href='/dashboard/outfits'>
        <button
          type='button'
          className='py-2.5 px-5 me-2 mb-2 w-full text-2xl font-medium text-gray-900 bg-white rounded-tr-lg rounded-bl-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-colors duration-300'
        >
          Outfits
        </button>
      </Link> */}
    </>
  );
}
