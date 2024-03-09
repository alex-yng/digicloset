import Image from "next/image";

export default function Features() {
  return (
    <section
      id='features'
      className='w-full container mx-auto mt-32 p-8 text-concrete-900 dark:text-concrete-50 flex flex-col items-center'
    >
      <h1 className='text-concrete-950 dark:text-sage-50 text-2xl md:text-4xl w-50% my-8 text-center'>
        No more procrastinating your day thinking about what to wear,
      </h1>
      <div className='my-16 grid grid-cols-3 md:gap-0 gap-8'>
        <h2 className='text-xl lg:text-4xl place-self-center text-center md:mr-8'>
          see all your clothes in a single glance
        </h2>
        <Image
          src='https://fakeimg.pl/900x900'
          alt='product picture'
          height={900}
          width={900}
          className='col-span-2'
        />
      </div>

      <div className='my-16 grid grid-cols-3 md:gap-0 gap-8'>
        <Image
          src='https://fakeimg.pl/900x900'
          alt='product picture'
          height={900}
          width={900}
          className='col-span-2'
        />
        <h2 className='text-xl lg:text-4xl place-self-center text-center px-4'>
          put outfits together with ease
        </h2>
      </div>

      <div className='my-16 grid grid-cols-3 md:gap-0 gap-8'>
        <h2 className='text-xl lg:text-4xl place-self-center text-center px-4'>
          seamlessly update your collection
        </h2>
        <Image
          src='https://fakeimg.pl/900x900'
          alt='product picture'
          height={900}
          width={900}
          className='col-span-2'
        />
      </div>
    </section>
  );
}
