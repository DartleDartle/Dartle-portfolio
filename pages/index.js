import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative min-h-[100svh] overflow-y-auto xl:overflow-hidden bg-grey">
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
              exit="hidden"
              className="font-bold leading-[1.05] text-[clamp(34px,6vw,42px)]"
            >
              {t("home.title1")} <br />
              {t("home.title2")}{" "}
              <span className="text-accent">{t("about.title4")}</span>{" "}
              {t("home.title3")}
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
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
              exit="hidden"
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
              exit="hidden"
            >
              <ProjectsBtn />
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