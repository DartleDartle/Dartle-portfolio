// next image
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='absolute left-1/4  bottom-24 z-10 w-[260px] xl:w-[240px] hidden xl:block'>
      <Image
        src={'/choosin.png'}
        width={260}
        height={200}
        className='w-full h-full'
        alt=''
      />
    </div>
  );
};

export default Bulb;
