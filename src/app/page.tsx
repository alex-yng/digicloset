import Closet from "./components/Closet";

export default function Home() {
  const clothingItems = [
    { id: 0, src: "/TshirtNOBG.png" },
    { id: 1, src: "/SweatshirtNOBG.png" },
    { id: 2, src: "/HoodieNOBG.png" },
    { id: 3, src: "/JeansNOBG.png" },
    { id: 4, src: "/CargosNOBG.png" },
    { id: 5, src: "/ParachuteNOBG.png" },
  ];
  return (
    <main>
      {/* Hero */}
      <section className='md:h-[92vh] w-full flex flex-col justify-around test-concrete-900 dark:text-concrete-50'>
        <div className='flex flex-col justify-center items-center gap-4 p-32'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>digi_closet</h1>
          <h2 className='text-lg md:text-xl lg:text-2xl'>
            your digital walk-in closet
          </h2>
          <div
            className='w-[380px] h-[228px] md:w-[700px] md:h-[420px] lg:w-[1000px] lg:h-[600px]
           bg-ice-200 flex items-center justify-center shadow-2xl px-8 pt-4 relative'
          >
            <Closet clothingItems={clothingItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
