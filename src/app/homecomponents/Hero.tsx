import Clothes from "./Clothes";

export default function Hero() {
  return (
    <section className='md:h-screen w-full flex flex-col justify-around test-concrete-900 dark:text-concrete-50 md:pt-12'>
      <div className='flex flex-col justify-center items-center gap-4 p-32'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl'>
          your personal, digital wardrobe
        </h1>
        <h2 className='text-lg md:text-xl lg:text-2xl'></h2>
        <div
          className='w-[380px] h-[228px] md:w-[700px] md:h-[420px] lg:w-[1000px] lg:h-[600px]
           bg-ice-100 flex items-center justify-center shadow-2xl px-8 pt-4 relative'
        >
          <Clothes />
        </div>
      </div>
    </section>
  );
}
