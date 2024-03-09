import Link from "next/link";
import NavLinks from "./NavLinks";

export default function SideNav() {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Closet", href: "/dashboard/inventory" },
    { name: "Outfits", href: "/dashboard/outfits" },
  ];

  return (
    <section className='bg-white dark:bg-gray-800 h-screen p-4 flex flex-col gap-32'>
      <Link href='/'>
        <div
          id='branding'
          className='dark:bg-sky-400 dark:text-concrete-100 h-64 p-4 flex items-end rounded-tr-lg rounded-bl-lg'
        >
          <h1 className='text-3xl font-semibold'>digi_closet</h1>
        </div>
      </Link>
      <div id='navlinks' className='flex flex-col gap-8'>
        <NavLinks links={links} />
      </div>
    </section>
  );
}
