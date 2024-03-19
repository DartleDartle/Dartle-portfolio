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
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5ico" />,
          <FaCss3 key="css3ico" />,
          <FaJs key="javascriptico" />,
          <FaReact key="reactico" />,
          <SiNextdotjs key="nextico" />,
          <SiFramer key="framerico" />,
          <FaWordpress key="wordpressico" />,
          
          
          
          
          
          
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figmaico" />, <SiAdobexd key="adobexdico" />,],
      },
      {
        title: 'Photography',
        icons: [ <SiAdobelightroom key="lightroomico" />,],
      },
      {
        title: 'Graphic Design',
        icons: [<SiAdobephotoshop key="photoshopico" />, <SiAdobeindesign key="indesignico" />, <SiAdobeillustrator key="illustratorico" />],
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Graduated in Information Technology from Technical Institute - ITIS Leonardo Da Vinci Pisa.',
        stage: '2019',
      },
      {
        title: 'Graduated in Graphic Design - Accademia Di Belle Arti Di Brescia Santa Giulia',
        stage: '2022',
      },
      {
        title: 'Certificated portrait photographer - Istituto Marangoni di Firenze',
        stage: '2023',
      },
      {
        title: 'Certificated as Meta Front-End Developer - from Coursera platform',
        stage: '2024',
      },
    ],
  },
];

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-grey/60 py-32 text-center xl:text-left'>
      {/* avatar img */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 z-20'
          >
            How the<span className='text-accent'> front-end</span> take my experiences together.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
          Since childhood, I&apos;ve blended art and technology, earning a diploma in computer science and a degree in graphic design. My passion for design and web development led me to become a front-end developer.            
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Months learning front-end.
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} /> 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
    
              
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => (
              <div
                key={`${item.title}-${itemIndex}`} // Updated key here
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-primary/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>  ◦</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={`${item.title}-icon-${iconIndex}`} className='text-2xl text-primary'>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
