import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Lume - Case Study',
          path: '/thumb1-1.jpg?v=2',
          url: '/casestudy',
          isExternal: false,
        },
        {
          title: 'Profilo github',
          path: '/thumb1-2.jpg?v=2',
          url: 'https://github.com/DartleDartle',
          isExternal: true,
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import { BsArrowRight } from 'react-icons/bs';

import Image from 'next/image';

const WorkSlider = () => {
  const { t } = useTranslation('common');

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px] xl:h-[520px] xxl:h-[640px]'
    >
      {workSlider.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className='grid grid-cols-2 gap-x-4 gap-y-8 cursor-pointer content-start h-full'>
              {slide.images.map((image, imageIndex) => {
                
                const linkProps = image.isExternal 
                  ? { href: image.url, target: "_blank", rel: "noopener noreferrer" }
                  : { href: image.url };

                return (
                  <Link
                    {...linkProps}
                    className='relative overflow-hidden flex flex-col items-center justify-start group'
                    key={imageIndex}
                  >

                    <div className="mb-2 text-sm font-regular text-primary text-center">
                      {image.title}
                    </div>

                    <div className='w-full aspect-video flex items-center justify-center relative overflow-hidden group rounded-lg bg-black/10'>
                      
                      <Image 
                        src={image.path} 
                        alt={image.title}
                        fill
                        className="object-cover" 
                      />
                      
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#efe7dc] to-[#f17e41] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-12 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>{t('prtmi1')}</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            {t('prtmi2')}
                          </div>

                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;