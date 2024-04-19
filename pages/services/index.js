// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';


// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

const Services = () => {
  const { t } = useTranslation('common');
  return (
    <div className='min-h-screen bg-grey py-56 xl:py-72 md:py-56 lg:py-48 sm:py-56 xl:mt-0 flex items-center'>
      <div className='container xl:mt-0 mx-auto '>
        <div className='flex flex-col xl:flex-row gap-x-24'>
          {/* text */}
          <div className='text-center flex xl:w-[35vw] flex-col lg:text-left mb-4  xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 z-20'
            >
              {t('skills-title')} <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 z-20'
            >
              {t('skills-desc')}
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:ml-5 xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}