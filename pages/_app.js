import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next'

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import {useRouter} from 'next/router';

import {AnimatePresence, MotionConfig, motion} from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (

  // reducedMotion="user": with the OS setting on, transforms jump to their end state, opacity still fades
  <MotionConfig reducedMotion='user'>
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  </MotionConfig>

  )
}

export default appWithTranslation(MyApp);
