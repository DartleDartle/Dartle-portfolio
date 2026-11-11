import { HiArrowDownTray } from 'react-icons/hi2';

import { useTranslation } from 'next-i18next';

const DownloadPdfBtn = () => {
  const { t } = useTranslation('common');

  return (
    <a
      href="/portfolio-davide-pintore.pdf"
      download="Davide-Pintore-Portfolio.pdf"
      className="flex items-center gap-x-2 min-h-[44px] text-sm font-medium border border-accent/50 rounded-full px-5 py-3 hover:border-accent hover:bg-accent/10 active:scale-[0.98] transition-[border-color,background-color,transform] duration-200 ease-out"
    >
      <HiArrowDownTray className="text-lg shrink-0" aria-hidden="true" />
      {t('download-cv')}
    </a>
  );
};

export default DownloadPdfBtn;
