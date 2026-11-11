import localFont from 'next/font/local'

// Sora (OFL), latin, variable 300–800, served from the repo so the build
// never depends on Google Fonts being reachable.
const sora = localFont({
  src: '../fonts/sora-latin-300-800.woff2',
  variable: '--font-sora',
  weight: '300 800',
  display: 'swap',
})

import Nav from '../components/Nav'
import Header from '../components/Header'
import { useRouter } from 'next/router';

const caseStudyPages = ['/lume', '/clinicsoul', '/fisiogest', '/viadiguinceri'];

const Layout = ({children}) => {
  const router = useRouter();
  const isCaseStudyPage = caseStudyPages.some((path) =>
    router.pathname.startsWith(path)
  );

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
