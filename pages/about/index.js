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
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobePremier,
} from 'react-icons/tb';

import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiAndroidstudio,
  SiXcode,
  SiKotlin,
  SiMiro,
  SiMaze,
} from 'react-icons/si';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

// translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// about data
export const getAboutData = (t) => [
  {
    title: t('s'),
    info: [
      {
        title: 'UI/UX Design',
        icons: [
          { icon: <FaFigma />, label: 'Figma' },
          { icon: <SiMiro />, label: 'Miro' },
          { icon: <SiMaze />, label: 'Maze' },
        ],
      },
      {
        title: t('gd'),
        icons: [
          { icon: <TbBrandAdobeIllustrator />, label: 'Adobe Illustrator' },
          { icon: <TbBrandAdobePhotoshop />, label: 'Adobe Photoshop' },
          { icon: <TbBrandAdobeIndesign />, label: 'Adobe InDesign' },
          { icon: <TbBrandAdobePremier />, label: 'Adobe Premiere Pro' },
        ],
      },
      {
        title: t('Ai'),
        icons: [
    {
      icon: (
        <img
          src="/icons/claude.png"
          alt="Claude"
          className="w-6 h-6 pointer-events-none select-none"
          draggable={false}
        />
      ),
      label: 'Claude',
    },
    {
      icon: (
        <img
          src="/icons/notion.png"
          alt="Notion"
          className="w-6 h-6 pointer-events-none select-none"
          draggable={false}
        />
      ),
      label: 'Notion',
    },
    {
      icon: (
        <img
          src="/icons/gpt.png"
          alt="ChatGPT"
          className="w-6 h-6 pointer-events-none select-none"
          draggable={false}
        />
      ),
      label: 'ChatGPT',
    },
    {
      icon: (
        <img
          src="/icons/gemini.png"
          alt="Gemini"
          className="w-6 h-6 pointer-events-none select-none"
          draggable={false}
        />
      ),
      label: 'Gemini',
    },
  ],
      },
      {
        title: t('web'),
        icons: [
          { icon: <FaHtml5 />, label: 'HTML5' },
          { icon: <FaCss3 />, label: 'CSS3' },
          { icon: <FaJs />, label: 'JavaScript' },
          { icon: <FaReact />, label: 'React' },
          { icon: <SiNextdotjs />, label: 'Next.js' },
          { icon: <SiFramer />, label: 'Framer' },
          { icon: <FaWordpress />, label: 'WordPress' },
          { icon: <SiTypescript className='w-5 h-5' />, label: 'TypeScript' },
        ],
      },
      {
        title: t('m'),
        icons: [
          { icon: <FaFigma />, label: 'Figma' },
          { icon: <SiDart />, label: 'Dart' },
          { icon: <SiFlutter />, label: 'Flutter' },
          { icon: <SiAndroidstudio />, label: 'Android Studio' },
          { icon: <SiXcode />, label: 'Xcode' },
          { icon: <SiKotlin />, label: 'Kotlin' },
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

const About = () => {
  const { t } = useTranslation('common');
  const aboutData = getAboutData(t);
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-hidden xl:overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center xl:items-start xl:flex-row pt-56 xl:pt-[20vh] pb-32 xl:pb-0 h-full">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start">
          
          <div className="text-center xl:text-left flex flex-col justify-center">
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="font-bold leading-[1.05] text-3xl md:text-4xl"
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

            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex mt-8 mx-auto xl:mx-0"
            >
              <div className="flex gap-x-8">
                <div className="relative pr-8 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={19} duration={2.5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                    {t('counter1')}
                  </div>
                </div>

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

          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[560px] xl:pl-16 flex flex-col"
          >
            <div className="flex gap-x-6 xl:gap-x-10 justify-center xl:justify-start mb-6">
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

            <div className="w-full max-h-[50vh] xl:max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex flex-col gap-y-4 items-center xl:items-start">
                {aboutData[index].info.map((item, itemIndex) => (
                  <div
                    key={`${item.title}-${itemIndex}`}
                    className="w-full flex flex-col md:flex-row md:items-center justify-start gap-x-3 text-primary/60"
                  >
                    <div className="font-light mb-2 md:mb-0 min-w-[140px] text-center xl:text-left">
                      {item.title}
                    </div>

                    <div className="hidden md:flex opacity-40">◦</div>

                    {item.stage && (
                      <div className="min-w-[70px] text-center md:text-left">
                        {item.stage}
                      </div>
                    )}

                    {item.icons && item.icons.length > 0 && (
                      <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-3">
                        {item.icons.map((iconItem, iconIndex) => (
                          <div
                            key={`${item.title}-icon-${iconIndex}`}
                            className="relative group flex items-center justify-center text-2xl text-primary cursor-pointer"
                          >
                            <div>{iconItem.icon}</div>

                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex whitespace-nowrap z-10 pointer-events-none">
                              <div className="bg-primary relative flex text-grey items-center px-2 py-1 rounded-[4px] text-[12px] leading-none font-semibold">
                                {iconItem.label}
                                <div className="border-solid border-b-primary border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute bottom-full left-1/2 -translate-x-1/2"></div>
                              </div>
                            </div>
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