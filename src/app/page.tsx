import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className='md:h-[92vh] w-full flex flex-col justify-around'>
        <div className='flex flex-col justify-center items-center gap-4 p-32'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>digi_closet</h1>
          <h2 className='text-lg md:text-xl lg:text-2xl'>
            your digital walk-in closet
          </h2>
          <div
            className='w-[380px] h-[228px] md:w-[700px] md:h-[420px] lg:w-[1000px] lg:h-[600px]
          bg-ice-200 flex items-center justify-center shadow-2xl px-8 pt-4 relative'
          >
            <div className='bg-sage-200 h-4/5 w-1/3 hover:scale-110 transition-all duration-500 absolute left-[5%] hover:z-10 hover:left-[30%]'></div>
            <div className='bg-sage-300 h-4/5 w-1/3 hover:scale-110 transition-all duration-500 absolute left-[17%] hover:z-10 hover:left-[30%]'></div>
            <div className='bg-sage-400 h-4/5 w-1/3 hover:scale-110 transition-all duration-500 absolute left-[29%] hover:z-10 hover:left-[30%]'></div>
            <div className='bg-sage-500 h-4/5 w-1/3 hover:scale-110 transition-all duration-500 absolute left-[41%] hover:z-10 hover:left-[30%]'></div>
            <div className='bg-sage-600 h-4/5 w-1/3 hover:scale-110 transition-all duration-500 absolute left-[52%] hover:z-10 hover:left-[30%]'></div>
            <div className='bg-sage-700 h-4/5 w-1/3 hover:scale-110 transition-all duration-500 absolute left-[62%] hover:z-10 hover:left-[30%]'></div>
          </div>
        </div>
      </section>
    </main>
  );
}
