import Image from "next/image";

export default function Clothes() {
  return (
    <>
      <div className='transition-all duration-500 absolute top-[10%] left-4'>
        <Image
          src='/tshirt_cropped.png'
          alt='tshirt'
          height={500}
          width={500}
          className='h-[190px] md:h-[350px] lg:h-[500px]'
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[7rem]'>
        <Image
          src='/sweatshirt_cropped.png'
          alt='sweatshirt'
          height={500}
          width={500}
          className='h-[190px] md:h-[350px] lg:h-[500px]'
        />
      </div>
      <div className='transition-all duration-500  absolute top-[10%] left-[14rem]'>
        <Image
          src='/hoodie_cropped.png'
          alt='hoodie'
          height={500}
          width={500}
          className='h-[190px] md:h-[350px] lg:h-[500px]'
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[26rem]'>
        <Image
          src='/cargos_cropped.png'
          alt='cargos'
          height={500}
          width={250}
          className='h-[190px] md:h-[350px] lg:h-[500px]'
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[36rem]'>
        <Image
          src='/jeans_cropped.png'
          alt='jeans'
          height={500}
          width={250}
          className='h-[190px] md:h-[350px] lg:h-[500px]'
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[45rem]'>
        <Image
          src='/parachute_cropped.png'
          alt='parachute'
          height={500}
          width={250}
          className='h-[190px] md:h-[350px] lg:h-[500px]'
        />
      </div>
    </>
  );
}
