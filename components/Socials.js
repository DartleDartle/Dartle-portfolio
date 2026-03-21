import Link from "next/link";

// icons
import {
  RiInstagramLine, 
  RiBehanceLine, 
  RiGithubLine, 
  RiLinkedinLine
} from 'react-icons/ri'

import { FlagIcon } from "react-flag-kit";
import { useRouter } from 'next/router';

const Socials = () => {
  const router = useRouter();
  const { locale } = router;

  const switchLocale = (lng) => {
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-6 lg:gap-y-0 lg:gap-x-8 xl:gap-x-12">
      
      <div className="flex items-center gap-x-5 text-[22px] xl:text-xl">
        <Link href={'https://www.behance.net/davidepintore'} className="hover:text-accent transition-all duration-300">
          <RiBehanceLine/>
        </Link>
        <Link href={'https://github.com/DartleDartle'} className="hover:text-accent transition-all duration-300">
          <RiGithubLine />
        </Link>
        <Link href={'https://www.linkedin.com/in/davidepintore'} className="hover:text-accent transition-all duration-300">
          <RiLinkedinLine />
        </Link>
      </div>

      <div className="flex items-center gap-x-6">
        <button 
          onClick={() => switchLocale('en')} 
          disabled={locale === 'en'} 
          className={`flex items-center justify-center py-1 btn rounded-[15px] border border-accent/50 min-w-[70px] transition-all duration-300 bg-accent/20 hover:border-accent ${locale === 'it' ? 'opacity-50' : 'opacity-100 bg-accent/60'} cursor-pointer`}
        >
          <FlagIcon code="GB" size={20} />
        </button>
        <button 
          onClick={() => switchLocale('it')} 
          disabled={locale === 'it'} 
          className={`flex items-center justify-center py-1 btn rounded-[15px] border border-accent/50 min-w-[70px] transition-all duration-300 bg-accent/20 hover:border-accent ${locale === 'en' ? 'opacity-50' : 'opacity-100 bg-accent/60'} cursor-pointer`}
        >
          <FlagIcon code="IT" size={20} />
        </button>
      </div>
      
    </div>
  )
}

export default Socials;