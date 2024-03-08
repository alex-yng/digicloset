"use client";

import Link from "next/link";

type LinkItem = {
  name: string;
  href: string;
};

type LinksProps = {
  links: LinkItem[];
};

export default function Links({ links }: LinksProps) {
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <span className='text-sage-400'>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
