import Link from 'next/link';

import Seo from './Seo';

import { useTranslation } from 'next-i18next';

// 404 and 500: own pages so the header and nav get their translations there too
const StatusPage = ({ code, titleKey }) => {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-x-hidden">
      <Seo title={`${code} | Davide Pintore`} noindex />
      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />
      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex flex-col items-center justify-center text-center pt-52 pb-32 xl:py-0">
        <h1 className="font-bold leading-[1.05] text-[clamp(34px,4vw,56px)]">
          {t(titleKey)}<span className="text-accent-deep">.</span>
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex items-center min-h-[44px] text-xl font-medium underline decoration-accent decoration-2 underline-offset-4 rounded-md"
        >
          {t('status-home-link')}
        </Link>
      </div>
    </div>
  );
};

export default StatusPage;
