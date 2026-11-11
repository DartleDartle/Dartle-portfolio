import Image from "next/image";

import Link from "next/link";

import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-6 lg:py-8">
          <Link href={'/'} className="flex items-center min-h-[44px] rounded-md">
            <Image
              src={'/logo.svg'}
              width={220}
              height={48}
              alt='Davide Pintore'
              priority={true}
              className="w-[200px] sm:w-[220px]"
              style={{ height: 'auto' }}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>

  )

};

export default Header;
