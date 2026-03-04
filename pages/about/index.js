import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiAndroidstudio,
  SiXcode,
  SiKotlin,
} from 'react-icons/si';

// about data
export const getAboutData = (t) => [
  {
    title: t('s'),
    info: [
      {
        title: t('web'),
        icons: [
          <FaHtml5 key="html5ico" />,
          <FaCss3 key="css3ico" />,
          <FaJs key="javascriptico" />,
          <FaReact key="reactico" />,
          <SiNextdotjs key="nextico" />,
          <SiFramer key="framerico" />,
          <FaWordpress key="wordpressico" />,
          <SiTypescript key="typescriptico" />,
        ],
      },
      {
        title: t('m'),
        icons: [
          <FaFigma key="figmaico" />,
          <SiDart key="dartico" />,
          <SiFlutter key="flutterico" />,
          <SiAndroidstudio key="androidstudioico" />,
          <SiXcode key="xcodeico" />,
          <SiKotlin key="kotlinico" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figmaico2" />, <SiAdobexd key="adobexdico" />],
      },
      {
        title: t('ph'),
        icons: [<SiAdobelightroom key="lightroomico" />],
      },
      {
        title: t('gd'),
        icons: [
          <SiAdobephotoshop key="photoshopico" />,
          <SiAdobeindesign key="indesignico" />,
          <SiAdobeillustrator key="illustratorico" />,
        ],
      },
    ],
  },
  {
    title: t('c'),
    info: [
      { title: t('c1'), stage: '2019' },
      { title: t('c2'), stage: '2022' },
      { title: t('c3'), stage: '2024' },
      { title: t('c4'), stage: '2026' },
    ],
  },
];

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

// translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const About = () => {
  const { t } = useTranslation('common');
  const aboutData = getAboutData(t);
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-[100svh] bg-grey xl:overflow-hidden">
      {/* optional: same gradient vibe as home */}
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      {/* content */}
      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-start xl:items-center pt-56 xl:pt-16 pb-32 xl:pb-0">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* LEFT */}
          <div className="text-center xl:text-left">
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-bold leading-[1.05] text-[clamp(34px,4vw,34px)]"
            >
              {t('about.title1')}{' '}
              <span className="text-accent">{t('about.title5')}</span>
              <br /> {t('about.title2')}
               {t('about.title3')}
            </motion.h2>

            <motion.p
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-6 max-w-[52ch] mx-auto xl:mx-0 text-base xl:text-lg opacity-80"
            >
              {t('about.text')}
            </motion.p>

            {/* counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex mt-8 mx-auto xl:mx-0"
            >
              <div className="flex gap-x-8">
                {/* experience */}
                <div className="relative pr-8 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={18} duration={2.5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                    {t('counter1')}
                  </div>
                </div>

                {/* projects */}
                <div className="pl-8">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={2.5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                    {t('counter2')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[560px] xl:pl-16"
          >
            {/* tabs */}
            <div className="flex gap-x-6 xl:gap-x-10 justify-center xl:justify-start">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={`${item.title}-${itemIndex}`}
                  className={`${
                    index === itemIndex
                      ? 'text-accent after:w-[100%] after:bg-accent'
                      : 'text-primary/70'
                  } cursor-pointer capitalize xl:text-lg relative after:transition-all after:duration-300 after:w-8 after:h-[2px] after:bg-primary/30 after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            {/* content list */}
            <div className="mt-6 max-h-[58vh] overflow-auto pr-2">
              <div className="flex flex-col gap-y-4 items-center xl:items-start">
                {aboutData[index].info.map((item, itemIndex) => (
                  <div
                    key={`${item.title}-${itemIndex}`}
                    className="w-full flex flex-col md:flex-row md:items-center gap-x-3 text-primary/60"
                  >
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0 min-w-[140px] text-center xl:text-left">
                      {item.title}
                    </div>

                    <div className="hidden md:flex opacity-40">◦</div>

                    {/* stage (only for studies) */}
                    {item.stage && (
                      <div className="min-w-[70px] text-center md:text-left">
                        {item.stage}
                      </div>
                    )}

                    {/* icons */}
                    {item.icons && (
                      <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-3">
                        {item.icons.map((icon, iconIndex) => (
                          <div
                            key={`${item.title}-icon-${iconIndex}`}
                            className="text-2xl text-primary"
                          >
                            {icon}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}