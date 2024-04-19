// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants'

//translation
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';


const Home = () => {

  const { t } = useTranslation('common');
  
  return (
  <div className="bg-grey h-screen xl:h-screen">
  {/* text */}
    <div className="min-h-full bg-gradient-to-r from-grey/10 via-white/30 to-white/10 py-56 xl:py-62 md:py-56 lg:py-48 sm:py-56">
      <div className="text-center flex flex-col items-center justify-center  xl:items-start xl:text-left h-full container mx-auto">
        {/*title*/}
        <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="h1 z-20"
        >
          {t('home.title1')} <br /> {t('home.title2')} <span className='text-accent'>Front-End</span> {t('home.title3')} 
        </motion.h1>
        {/* subtitle */}
        <motion.p 
          variants={fadeIn('down', 0.3)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
         {t('home.text')}
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative z-20">
        <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className="hidden xl:flex z-20"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
  </div>

  )};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}