// components
import TestimonialSlider from '../../components/TestimonialSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

const Testimonials = () => {
  const { t } = useTranslation('common');
  return (
    <div className='min-h-screen bg-grey py-36 mb-12 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-8 mt-12 xl:mb-0'
        >
          {t('testimonial-title1')} <span className='text-accent'>{t('testimonial-title2')}.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider />
          
        </motion.div>
        
      </div>
    </div>
  );
};

export default Testimonials;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}