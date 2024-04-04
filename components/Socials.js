// links
import Link from "next/link";

// icons
import {RiInstagramLine, 
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
  <div className=" lg:flex xl:flex content-center justify-center gap-x-5 text-lg">
    <div className="flex gap-x-5 text-lg">
    <Link href={'https://www.instagram.com/dartledartle'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
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
    <div className="flex gap-x-8 mt-6 xl:mt-0 lg:mt-0 lg:ml-12 xl:ml-32 content-center">
      <button onClick={() => switchLocale('en')} disabled={locale === 'en'} className={`btn rounded-full border border-accent/50 max-w-[100px] px-4 transition-all duration-300 bg-accent/20 hover:border-accent ${locale === 'it' ? 'opacity-50' : 'opacity-100 bg-accent/60'} cursor-pointer`}>
      <FlagIcon code="GB" size={20} />
      </button>
      <button onClick={() => switchLocale('it')} disabled={locale === 'it'} className={`btn rounded-full border border-accent/50 max-w-[100px] px-4 transition-all duration-300 bg-accent/20 hover:border-accent ${locale === 'en' ? 'opacity-50' : 'opacity-100 bg-accent/60'} cursor-pointer`}>
      <FlagIcon code="IT" size={20} />
      </button>
    </div>
  </div>
  )
}


export default Socials;
