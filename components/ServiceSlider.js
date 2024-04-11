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
export const getServiceData = (t) => [
  {
    icon: <RxRocket />,
    title: t('web'),
    description: t('web-desc'),
  },
  {
    icon: <RxGear />,
    title: t('sm-title'),
    description: t('sm-desc'),
  },
  {
    icon: <RxPencil2 />,
    title: t('artist-title'),
    description: t('artist-desc'),
  },
  {
    icon: <RxLightningBolt />,
    title: t('fast-title'),
    description: t('fast-desc'),
  },
  {
    icon: <RxFace />,
    title: t('sociable-title'),
    description: t('sociable-desc'),
  },
  {
    icon: <RxStarFilled />,
    title: t('motivated-title'),
    description: t('motivated-desc'),
  },
  {
    icon: <RxBorderSolid />,
    title: t('constant-title'),
    description: t('constant-desc'),
  },
];

import { useTranslation } from 'next-i18next';

const ServiceSlider = () => {

  const { t } = useTranslation('common');
  const serviceData = getServiceData(t);

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
