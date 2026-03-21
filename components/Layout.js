import {Sora} from '@next/font/google'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

import Nav from '../components/Nav'
import Header from '../components/Header'
import { useRouter } from 'next/router';

const Layout = ({children}) => {
  const router = useRouter();
  const isCaseStudyPage = router.pathname.startsWith('/casestudy');

  return (
    <div 
      className={`page bg-site text-primary bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
  
      {!isCaseStudyPage && <Nav />}
      {!isCaseStudyPage && <Header />}
      
      {children}
    </div>
  );
};

export default Layout;
