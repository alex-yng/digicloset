import NavLinks from "./NavLinks";

export default function MobileNav() {
  const links = [
    { name: "Dash", href: "/dashboard" },
    { name: "Closet", href: "/dashboard/inventory" },
    { name: "Outfits", href: "/dashboard/outfits" },
    { name: "Settings", href: "/dashboard/settings" },
    { name: "Home", href: "/" },
  ];

  return (
    <section
      id='mobile nav'
      className='dark:text-concrete-100 dark:bg-slate-800 w-screen'
    >
      <div id='navlinks' className='flex justify-around h-32 pt-4'>
        <NavLinks links={links} />
      </div>
    </section>
  );
}
