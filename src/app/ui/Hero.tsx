import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className='md:h-screen w-full flex flex-col justify-around test-concrete-900 dark:text-concrete-50 md:pt-12 md:animate-fadeIn'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl'>
          your personal, digital wardrobe
        </h1>
        <h2 className='text-lg md:text-xl lg:text-2xl'></h2>
        <Image
          src='/hero_mac.png'
          alt='wardrobe on mac'
          width={2115}
          height={1386}
          className='w-[400px] h-[262] md:w-[800px] md:h-[524px]'
        />
        <Link
          href='/register'
          className='inline-flex items-center text-concrete-900 dark:text-white bg-ice-400 hover:bg-ice-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm md:text-xl mt-8 transition-colors duration-300 px-5 py-2.5 text-center dark:focus:ring-primary-900'
        >
          Get started
          <svg
            className='ml-2 -mr-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
