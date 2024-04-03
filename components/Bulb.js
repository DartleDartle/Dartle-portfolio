import { useState, useEffect } from 'react';
import Image from 'next/image';

const Bulb = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      if (window.innerHeight < 1000) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('resize', checkHeight);
    checkHeight();

    return () => window.removeEventListener('resize', checkHeight);
  }, []);

  return (
    <div className={`absolute left-1/4 bottom-24 z-10 w-[260px] xl:w-[240px] ${isHidden ? 'hidden' : 'xl:block'}`}>
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
