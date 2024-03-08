type clothingItem = {
  id: number;
  src: string;
};

interface closetProps {
  clothingItems: clothingItem[];
}

export default function Closet({ clothingItems }: closetProps) {
  return (
    <>
      {/* <div
       className='w-[380px] h-[228px] md:w-[700px] md:h-[420px] lg:w-[1000px] lg:h-[600px]
           bg-ice-200 flex items-center justify-center shadow-2xl px-8 pt-4 relative'
     > */}
      <div className='h-4/5 w-1/3 hover:scale-125 border-red-500  transition-all duration-500'>
        <img src='/TshirtNOBG.png' object-fit='cover' />
      </div>
      <div className='h-4/5 w-1/3 hover:scale-125 border-red-500  transition-all duration-500'>
        <img src='/SweatshirtNOBG.png' object-fit='cover' />
      </div>
      <div className='h-4/5 w-1/3 hover:scale-125 border-red-500  transition-all duration-500'>
        <img src='/HoodieNOBG.png' object-fit='cover' />
      </div>
      <div className='h-4/5 w-1/3 hover:scale-125 border-red-500  transition-all duration-500'>
        <img src='/CargosNOBG.png' object-fit='cover' />
      </div>
      <div className='h-4/5 w-1/3 hover:scale-125 border-red-500  transition-all duration-500'>
        <img src='/JeansNOBG.png' object-fit='cover' />
      </div>
      <div className='h-4/5 w-1/3 hover:scale-125 border-red-500  transition-all duration-500'>
        <img src='/ParachuteNOBG.png' object-fit='cover' />
      </div>
      {/* </div> */}
      {/* {clothingItems.map((item) => {
        return (
          <img
            src={item.src}
            aspect-ratio='auto'
            className={`h-4/5 hover:scale-125 transition-all duration-500 hover:z-10 absolute left-[0]`}
          />
        );
      })} */}
    </>
  );
}
