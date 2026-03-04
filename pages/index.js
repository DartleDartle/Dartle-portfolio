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
    <section className="relative min-h-[100svh] overflow-hidden bg-grey">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesContainer />
      </div>

      {/* content */}
      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-center">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-end">
          
          {/* LEFT */}
          <div className="text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-56 xl:mt-24
                font-bold leading-[1.05]
                text-[clamp(36px,5vw,42px)]
              "
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
              className="
                mt-6
                max-w-[52ch]
                mx-auto xl:mx-0
                text-base xl:text-lg
                opacity-80
              "
            >
              {t("home.text")}
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" mt-40 xl:mt-0 xl:pt-0 flex justify-end xl:justify-start"
            >
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center xl:justify-end">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
                w-[clamp(240px,32vw,520px)]
                aspect-[4/3]
                relative
              "
            >
              <Avatar className="w-full h-full object-contain" />
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