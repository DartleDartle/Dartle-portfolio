// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// icons
import {
  RxLightningBolt,
  RxFace,
  RxPencil2,
  RxStarFilled,
  RxRocket,
  RxGear,
  RxBorderSolid,
} from 'react-icons/rx';

// import required modules
import { Navigation, FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxRocket />,
    title: 'Web Designer',
    description: 'I did a 3-year course in webdesign, while I graduated for Graphic Design.',
  },
  {
    icon: <RxGear />,
    title: 'Scentific mind',
    description: 'Computer science diploma and my passion for computers, made me a scientific mind.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Artist',
    description: 'Graduated in graphic design, photographer in freetime, and i love music and art.',
  },
  {
    icon: <RxLightningBolt />,
    title: 'Fast Learning',
    description: 'I learned to use the latest website development tools in just a few months.',
  },
  {
    icon: <RxFace />,
    title: 'Sociable',
    description: 'Im a sociable person, but most important Im diplomatic and understanding.',
  },
  {
    icon: <RxStarFilled />,
    title: 'Motivated',
    description: 'Im very good at managing myself, I dont let myself get down, and i stay motivated.',
  },
  {
    icon: <RxBorderSolid />,
    title: 'Constant',
    description: 'Consistency is one of the secrets to improving and my discipline helps me.',
  },
  
];

const ServiceSlider = () => {
  return (
    <Swiper
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, FreeMode, Pagination]}
      className='h-[240px] sm:h-[440px] my-custom-swiper'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(255,255,255,1)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(252,229,181,1)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
