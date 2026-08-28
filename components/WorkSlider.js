import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { useIsDesktop } from '../hooks/useIsDesktop';

export const workProjects = [
  {
    title: 'Lume - Case Study',
    path: '/thumb1-1.png?v=2',
    url: '/lume',
    isExternal: false,
  },
  {
    title: 'ClinicSoul - UX Case Study',
    path: '/thumb1-2.png?v=2',
    url: '/clinicsoul',
    isExternal: false,
  },
  {
    title: 'Fisiogest - Clinic Management Platform',
    path: '/thumb1-4.png',
    url: '/fisiogest',
    isExternal: false,
  },
  {
    title: 'Bruno Cambiaso - Artist Portfolio',
    path: '/thumb1-5.png',
    url: '/brunocambiaso',
    isExternal: false,
  },
  {
    title: 'Profilo github',
    path: '/thumb1-3.png?v=2',
    url: 'https://github.com/DartleDartle',
    isExternal: true,
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { BsArrowRight } from 'react-icons/bs';

import Image from 'next/image';

// raggruppa i progetti in "pagine": 4 (griglia 2x2) su desktop, 2 (colonna singola) su mobile
const chunk = (items, size) => {
  const pages = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
};

const ProjectCard = ({ image, t }) => {
  const linkProps = image.isExternal
    ? { href: image.url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: image.url };

  return (
    <Link
      {...linkProps}
      className='relative overflow-hidden flex flex-col items-center justify-start group'
    >
      <div className="mb-2 text-sm font-regular text-primary text-center">
        {image.title}
      </div>

      <div className='w-full aspect-video flex items-center justify-center relative overflow-hidden group rounded-lg bg-black/10'>
        <Image
          src={image.path}
          alt={image.title}
          fill
          sizes="(max-width: 1199px) 90vw, 340px"
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
};

const WorkSlider = () => {
  const { t } = useTranslation('common');
  const isDesktop = useIsDesktop(1200);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = chunk(workProjects, isDesktop ? 4 : 2);

  return (
    <div>
      <div className="relative">
        <Swiper
          key={isDesktop ? 'desktop' : 'mobile'}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={isDesktop ? 'auto' : 1}
          spaceBetween={isDesktop ? 40 : 0}
        >
          {pages.map((page, pageIndex) => (
            <SwiperSlide
              key={pageIndex}
              style={isDesktop ? { width: 'calc(100% - 64px)' } : undefined}
            >
              <div
                className={
                  isDesktop
                    ? 'w-full h-[460px] grid grid-cols-2 gap-x-16 gap-y-10 items-start'
                    : 'w-full h-[540px] grid grid-cols-1 gap-y-10 items-start'
                }
              >
                {page.map((image, imageIndex) => (
                  <ProjectCard key={imageIndex} image={image} t={t} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* sfumatura sul bordo destro: da xl in su, per far intravedere la pagina successiva tagliata */}
        {isDesktop && pages.length > 1 && (
          <div className="hidden xl:block pointer-events-none absolute top-0 right-0 h-[460px] w-16 bg-gradient-to-r from-transparent to-grey"></div>
        )}
      </div>

      {/* controlli: elementi esterni, fuori dal box dello slider, mai sovrapposti al contenuto */}
      {pages.length > 1 && (
        <div className="flex items-center justify-center gap-x-6 mt-6">
          {isDesktop && (
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={activeIndex === 0}
              aria-label="Previous"
              className="text-primary/60 hover:text-accent disabled:opacity-20 disabled:hover:text-primary/60 transition-all duration-300"
            >
              <HiArrowLeft className="text-xl" />
            </button>
          )}

          <div className="flex items-center gap-x-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => swiperRef.current?.slideTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-primary/20 hover:bg-primary/40'
                }`}
              />
            ))}
          </div>

          {isDesktop && (
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={activeIndex === pages.length - 1}
              aria-label="Next"
              className="text-primary/60 hover:text-accent disabled:opacity-20 disabled:hover:text-primary/60 transition-all duration-300"
            >
              <HiArrowRight className="text-xl" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkSlider;
