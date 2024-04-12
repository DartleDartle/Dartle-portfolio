// testimonial slider data
export const getTestimonialSlider = (t) => [
  {
    image: '/mirko.png',
    name: 'Mirko',
    position: t('Mirko-role'),
    message: t('Mirko'),
  },
  {
    image: '/bianca.png',
    name: 'Bianca',
    position: t('Bianca-role'),
    message:  t('Bianca'),
  },
  {
    image: '/claudia.png',
    name: 'Claudia',
    position: t('Claudia-role'),
    message: t('Claudia'),
  },
  {
    image: '/daniele.png',
    name: 'Daniele',
    position: t('Daniele-role'),
    message: t('Daniele'),
  },
  {
    image: '/shab.png',
    name: 'Shab',
    position: t('Shab-role'),
    message: t('Shab'),
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

//translation
import { useTranslation } from 'next-i18next';

const TestimonialSlider = () => {
  const { t } = useTranslation('common');
  const testimonialSlider = getTestimonialSlider(t);
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[500px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-accent/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-accent/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

