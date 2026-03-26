// testimonial slider data
export const getTestimonialSlider = (t) => [
  {
    image: '/mirko.png',
    name: 'Mirko',
    linkedin: 'https://www.linkedin.com/in/Mirko-Sbrana/',
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
    linkedin: 'https://www.linkedin.com/in/claudia-pintore/',
    position: t('Claudia-role'),
    message: t('Claudia'),
  },
  {
    image: '/daniele.png',
    name: 'Daniele',
    linkedin: 'https://www.linkedin.com/in/daniele-pintore-77a311220/',
    position: t('Daniele-role'),
    message: t('Daniele'),
  },
  {
    image: '/shab.png',
    name: 'Shab',
    linkedin: 'https://www.linkedin.com/in/shab-pompeiano/',
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
      className='my-custom-swiper h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center gap-x-8 px-2 md:px-16 pb-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt={person.name} />
                  </div>
                  
                  {person.linkedin ? (
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='text-lg font-medium hover:text-accent transition-all duration-300 flex items-center justify-center gap-1'
                      title={`${t('hover-message')} ${person.name} ${t('hover-message2')}`}
                    >
                      {person.name}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-60">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ) : (
                    <div className='text-lg font-medium'>{person.name}</div>
                  )}
                  {/* FINE NOME CLICCABILE */}

                  <div className='text-[12px] uppercase font-extralight tracking-widest mt-1'>
                    {person.position}
                  </div>
                </div>
              </div>
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-accent/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 mt-6 xl:mt-0'>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-accent/20 mx-auto md:mx-0' />
                </div>
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