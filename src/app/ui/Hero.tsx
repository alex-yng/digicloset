import Image from "next/image";

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
      </div>
    </section>
  );
}
