import Link from "next/link";

// icons
import {
  RiBehanceLine,
  RiGithubLine,
  RiLinkedinLine
} from 'react-icons/ri'

import { FlagIcon } from "react-flag-kit";
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const socialLinks = [
  { name: 'Behance', href: 'https://www.behance.net/davidepintore', icon: <RiBehanceLine /> },
  { name: 'GitHub', href: 'https://github.com/DartleDartle', icon: <RiGithubLine /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/davidepintore', icon: <RiLinkedinLine /> },
];

const languages = [
  { code: 'en', flag: 'GB', label: 'English' },
  { code: 'it', flag: 'IT', label: 'Italiano' },
];

const Socials = () => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');

  const switchLocale = (lng) => {
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-y-0 lg:gap-x-6 xl:gap-x-10">

      <div className="flex items-center gap-x-1 text-[22px] xl:text-xl">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} (${t('opens-new-tab')})`}
            className="flex items-center justify-center w-11 h-11 rounded-full hover:text-accent-deep active:scale-[0.94] transition-[color,transform] duration-200 ease-out"
          >
            <span aria-hidden="true">{social.icon}</span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-6" role="group" aria-label={t('lang-label')}>
        {languages.map((lng) => {
          const isCurrent = locale === lng.code;
          return (
            <button
              key={lng.code}
              type="button"
              onClick={() => switchLocale(lng.code)}
              disabled={isCurrent}
              aria-pressed={isCurrent}
              aria-label={lng.label}
              lang={lng.code}
              className={`flex items-center justify-center py-1 btn rounded-[15px] border border-accent/50 min-w-[70px] transition-[opacity,border-color,background-color,transform] duration-200 ease-out hover:border-accent ${isCurrent ? 'bg-accent/60 cursor-default' : 'bg-accent/20 opacity-50 hover:opacity-80 active:scale-[0.97] cursor-pointer'}`}
            >
              <FlagIcon code={lng.flag} size={20} aria-hidden="true" />
            </button>
          );
        })}
      </div>

    </div>
  )
}

export default Socials;
