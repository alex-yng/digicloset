import Image from "next/image";

export default function Features() {
  return (
    <section
      id='features'
      className='w-full container mx-auto p-8 text-concrete-900 dark:text-concrete-50'
    >
      <div className='my-16 grid grid-cols-2'>
        <h2 className='text-4xl place-self-center text-center px-32'>
          see all your clothes in a single glance
        </h2>
        <Image
          src='https://fakeimg.pl/900x900'
          alt='product picture'
          height={900}
          width={900}
        />
      </div>

      <div className='my-16 grid grid-cols-2'>
        <Image
          src='https://fakeimg.pl/900x900'
          alt='product picture'
          height={900}
          width={900}
        />
        <h2 className='text-4xl place-self-center text-center px-32'>
          put outfits together with ease
        </h2>
      </div>

      <div className='my-16 grid grid-cols-2'>
        <h2 className='text-4xl place-self-center text-center px-32'>
          seamlessly update your collection
        </h2>
        <Image
          src='https://fakeimg.pl/900x900'
          alt='product picture'
          height={900}
          width={900}
        />
      </div>
    </section>
  );
}
