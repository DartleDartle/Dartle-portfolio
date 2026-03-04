// components
import WorkSlider from '../../components/WorkSlider';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Work = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-x-hidden">
      {/* optional: same gradient vibe */}
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      {/* content */}
      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-start xl:items-center pt-64 xl:pt-64 xl:pb-0">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* LEFT: text */}
          <div className="text-center xl:text-left">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-bold leading-[1.05] text-[clamp(34px,4vw,56px)]"
            >
              {t('work-title')} <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-6 max-w-[52ch] mx-auto xl:mx-0 text-base xl:text-lg opacity-80"
            >
              {t('work-desc1')}{' '}
              <mark className="bg-accent/30 text-primary px-1 rounded">
                {t('work-desc2')}
              </mark>
            </motion.p>
          </div>

          {/* RIGHT: slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[720px] xl:justify-self-end"
          >
            <WorkSlider />
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