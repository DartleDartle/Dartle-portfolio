// components
import WorkSlider from '../../components/WorkSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

const Work = () => {
  const { t } = useTranslation('common');

  return (
    <div className='min-h-screen bg-grey py-56 xl:py-72 md:py-56 lg:py-48 sm:py-56 flex '>
      
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-24  '>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left  mb-4 xl:mb-0 '>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 z-20'
            >
              {t('work-title')} <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 z-20'
            >
              
              {t('work-desc1')} <mark className='bg-accent'> {t('work-desc2')}</mark>
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full  xl:max-w-[65%] md:max-w-[75%]'
          >
            <WorkSlider  />
          </motion.div>
        </div>
      </div>
    
    </div>
  );
};

export default Work;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}