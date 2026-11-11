import { HiEnvelope } from 'react-icons/hi2';

import Seo from '../components/Seo';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import DownloadPdfBtn from '../components/DownloadPdfBtn';
import Avatar from '../components/Avatar';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// the address the portfolio PDF already links to
const EMAIL = 'davide.pintore98@gmail.com';

const Home = () => {
  const { t } = useTranslation('common');
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(t('home.email-subject'))}`;

  return (
    <section className="relative min-h-[100svh] overflow-y-auto xl:overflow-hidden bg-grey">
      <Seo title={`${t('tab-home')} | Davide Pintore`} description={t('meta-home')} />

      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      <div className="absolute inset-0 pointer-events-none">
        <ParticlesContainer />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-[200px] pb-[140px] xl:pt-28 xl:pb-0 xl:min-h-[100svh] xl:flex xl:items-center xl:justify-center">
        
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-10 xl:grid xl:grid-cols-2 xl:gap-y-8 xl:gap-x-16 items-center">

          <div className="order-1 xl:col-start-1 xl:row-start-1 text-center xl:text-left flex flex-col items-center xl:items-start w-full">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="font-bold leading-[1.05] text-[clamp(34px,6vw,42px)]"
            >
              {t("home.title1")} <br />
              {t("home.title2")}
              <span className="text-accent-deep">{t("about.title4")}</span>
              {t("home.title3")}
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-[52ch] mx-auto xl:mx-0 text-base xl:text-lg opacity-80"
            >
              {t("home.text")}
            </motion.p>
          </div>

          <div className="order-2 xl:col-start-2 xl:row-span-2 relative flex justify-center w-full">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="w-[260px] sm:w-[320px] xl:w-[clamp(300px,32vw,520px)] aspect-[4/3] relative shrink-0"
            >
              <Avatar className="w-full h-full object-contain" />
            </motion.div>
          </div>

          <div className="order-3 xl:col-start-1 xl:row-start-2 flex justify-center xl:justify-start w-full">
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center xl:items-start gap-y-5"
            >
              <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-8 gap-y-4">
                <ProjectsBtn />
                <DownloadPdfBtn />
              </div>

              <a
                href={mailto}
                className="group inline-flex items-center gap-x-3 min-h-[44px] max-w-full rounded-full py-2 pr-2 text-primary active:scale-[0.98] transition-transform duration-200 ease-out"
              >
                <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-primary text-grey group-hover:bg-accent-deep transition-colors duration-200" aria-hidden="true">
                  <HiEnvelope className="text-xl" />
                </span>
                <span className="flex flex-col text-left leading-tight min-w-0">
                  <span className="text-sm text-primary/80">{t('home.email-label')}</span>
                  <span className="font-medium text-sm min-[360px]:text-base sm:text-lg underline decoration-accent decoration-2 underline-offset-4 [overflow-wrap:anywhere]">
                    {EMAIL}
                  </span>
                </span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}