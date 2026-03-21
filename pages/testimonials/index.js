import TestimonialSlider from '../../components/TestimonialSlider';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Testimonials = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-start xl:items-center pt-52 xl:pt-24 pb-28 xl:pb-0">

        <div className="w-full flex flex-col items-center">
          
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="font-bold leading-[1.05] text-[clamp(34px,4vw,56px)] text-center xl:pb-12 pb-0"
          >
            {t('testimonial-title1')}{' '}
            <span className="text-accent">{t('testimonial-title2')}.</span>
          </motion.h2>

          {/* slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-10 w-full xl:max-w-4xl mx-auto"
          >
            <TestimonialSlider />
          </motion.div>
          
        </div>
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