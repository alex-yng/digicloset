export default function Clothes() {
  return (
    <>
      <div className='transition-all duration-500 absolute top-[10%] left-4'>
        <img
          className='h-[190px] md:h-[350px] lg:h-[500px]'
          src='/tshirt_cropped.png'
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[7rem]'>
        <img
          className='h-[190px] md:h-[350px] lg:h-[500px]'
          src='/sweatshirt_cropped.png'
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='transition-all duration-500  absolute top-[10%] left-[14rem]'>
        <img
          className='h-[190px] md:h-[350px] lg:h-[500px]'
          src='/hoodie_cropped.png'
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[26rem]'>
        <img
          className='h-[190px] md:h-[350px] lg:h-[500px]'
          src='/cargos_cropped.png'
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[36rem]'>
        <img
          className='h-[190px] md:h-[350px] lg:h-[500px]'
          src='/jeans_cropped.png'
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='transition-all duration-500 absolute top-[10%] left-[45rem]'>
        <img
          className='h-[190px] md:h-[350px] lg:h-[500px]'
          src='/parachute_cropped.png'
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
