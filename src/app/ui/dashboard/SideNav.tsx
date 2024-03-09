import Link from "next/link";

export default function SideNav() {
  return (
    <section className='bg-white dark:bg-gray-800 h-screen p-4 flex flex-col gap-32'>
      <div
        id='branding'
        className='dark:bg-sky-400 dark:text-concrete-100 h-64 p-4 flex items-end rounded-tr-lg rounded-bl-lg'
      >
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>digi_closet</h1>
        </Link>
      </div>
      <div id='nav-buttons' className='flex flex-col gap-8'></div>
    </section>
  );
}
