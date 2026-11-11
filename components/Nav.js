// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
];

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { t } = useTranslation('common');

  return (
    <nav
      aria-label={t('nav-label')}
      className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-6 mt-auto xl:right-[2%] z-20 top-0 w-full xl:w-16 xl:max-w-md xl:h-[100svh]'
    >
      <div
        className='flex w-11/12 xl:flex-col items-center justify-between xl:justify-center gap-y-3 px-6 md:px-40 xl:px-0 h-[80px] xl:h-max xl:py-6 bg-primary/10 rounded-[15px] backdrop-blur-sm text-3xl xl:text-xl'
      >
        {navData.map((link) => {
          const isActive = link.path === pathname;
          const label = t(`tab-${link.name}`);
          return (
            <Link
              className={`${
                isActive ? 'text-accent-deep' : ''
              } relative flex items-center justify-center w-12 h-12 rounded-full group hover:text-accent-deep active:scale-[0.94] transition-[color,transform] duration-200 ease-out`}
              href={link.path}
              key={link.path}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex xl:group-focus-visible:flex' aria-hidden='true'>
                <div className='bg-primary relative flex text-grey items-center p-[6px] whitespace-nowrap'>
                  <div className='text-[12px] leading-none font-semibold'>
                    {label}
                  </div>
                  <div className='border-solid border-l-primary border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>

              <div aria-hidden='true'>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
