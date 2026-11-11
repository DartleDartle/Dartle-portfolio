import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { useIsDesktop } from '../hooks/useIsDesktop';

// Via di Guinceri leads: it is the newest project
export const workProjects = [
  {
    title: 'Via di Guinceri - Case Study',
    path: '/thumb1-6.png?v=2',
    url: '/viadiguinceri',
    isExternal: false,
  },
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

const ProjectCard = ({ image, t, priority }) => {
  const linkProps = image.isExternal
    ? { href: image.url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: image.url };

  return (
    <Link
      {...linkProps}
      className='relative overflow-hidden flex flex-col items-center justify-start group rounded-lg active:scale-[0.98] transition-transform duration-200 ease-out'
    >
      <div className="mb-2 text-sm text-primary text-center">
        {image.title}
      </div>

      <div className='w-full aspect-video flex items-center justify-center relative overflow-hidden group rounded-lg bg-black/10'>
        <Image
          src={image.path}
          alt=""
          fill
          sizes="(max-width: 1199px) 90vw, 340px"
          priority={priority}
          className="object-cover"
        />

        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#efe7dc] to-[#f17e41] opacity-0 group-hover:opacity-80 group-focus-visible:opacity-80 transition-opacity duration-700 ease-out'></div>

        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-12 group-focus-visible:-translate-y-10 group-focus-visible:xl:-translate-y-12 transition-transform duration-300 ease-out' aria-hidden='true'>
          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
            <div className='delay-100'>{t('prtmi1')}</div>
            <div className='translate-y-[500%] group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-300 ease-out delay-150'>
              {t('prtmi2')}
            </div>

            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-300 ease-out delay-200'>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {image.isExternal && <span className='sr-only'>{t('opens-new-tab')}</span>}
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
            // the Swiper remounts when the layout switches: start the pager from its real index
            setActiveIndex(swiper.activeIndex);
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
                    : // capped width: at tablet sizes two 16:9 cards no longer overflow the slide
                      'w-full max-w-[440px] mx-auto grid grid-cols-1 gap-y-10 items-start'
                }
              >
                {page.map((image, imageIndex) => (
                  <ProjectCard key={imageIndex} image={image} t={t} priority={pageIndex === 0} />
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
              aria-label={t('slider-prev')}
              className="flex items-center justify-center w-11 h-11 rounded-full text-primary/70 hover:text-accent-deep active:scale-[0.94] disabled:opacity-30 disabled:hover:text-primary/70 disabled:active:scale-100 transition-[color,opacity,transform] duration-200 ease-out"
            >
              <HiArrowLeft className="text-xl" aria-hidden="true" />
            </button>
          )}

          <div className="flex items-center">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => swiperRef.current?.slideTo(i)}
                aria-label={`${t('slider-page')} ${i + 1}`}
                aria-current={i === activeIndex ? 'true' : undefined}
                className="group/dot flex items-center justify-center h-11 min-w-[44px] rounded-full"
              >
                {/* the visible dot stays small; the button around it is the 44px hit area */}
                <span
                  className={`block h-2 rounded-full transition-colors duration-200 ${
                    i === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-primary/30 group-hover/dot:bg-primary/50'
                  }`}
                />
              </button>
            ))}
          </div>

          {isDesktop && (
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={activeIndex === pages.length - 1}
              aria-label={t('slider-next')}
              className="flex items-center justify-center w-11 h-11 rounded-full text-primary/70 hover:text-accent-deep active:scale-[0.94] disabled:opacity-30 disabled:hover:text-primary/70 disabled:active:scale-100 transition-[color,opacity,transform] duration-200 ease-out"
            >
              <HiArrowRight className="text-xl" aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkSlider;
