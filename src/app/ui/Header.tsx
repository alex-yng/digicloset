import Link from "next/link";

export default function Header() {
  return (
    <header className='z-50 w-full flex justify-between items-center px-8 mb-8 h-[8vh] bg-ice-200 dark:bg-slate-800 dark:md:bg-transparent md:fixed'>
      <div>
        <a href='#'>
          <h1 className='text-concrete-900 dark:text-concrete-50 text-2xl'>
            digi_closet
          </h1>
        </a>
      </div>
      <nav className='flex gap-2 md:gap-8 my-4 items-center text-xs sm:text-base md:text-lg'>
        <a
          href='#features'
          className='text-concrete-700 dark:text-concrete-50 hover:text-concrete-900 dark:hover:text-concrete-200 transition-colors duration-300'
        >
          features
        </a>
        <a
          href='#about'
          className='text-concrete-700 dark:text-concrete-50 hover:text-concrete-900 dark:hover:text-concrete-200 transition-colors duration-300'
        >
          about
        </a>
        <Link href='/login'>
          <button className='text-sm md:text-base bg-sage-500 hover:bg-sage-600 dark:bg-ice-400 dark:hover:bg-ice-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300'>
            join now
          </button>
        </Link>
      </nav>
    </header>
  );
}
