// links
import Link from "next/link";

// icons
import {RiInstagramLine, 
        RiBehanceLine, 
        RiGithubLine, 
        RiLinkedinLine
      } from 'react-icons/ri'

const Socials = () => {
  return (
  <div className="flex item-center gap-x-5 text-lg">
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
  )
}


export default Socials;
