import { HiArrowDownTray } from 'react-icons/hi2';

import { useTranslation } from 'next-i18next';

const DownloadPdfBtn = () => {
  const { t } = useTranslation('common');

  return (
    <a
      href="/portfolio-davide-pintore.pdf"
      download="Davide-Pintore-Portfolio.pdf"
      className="flex items-center gap-x-2 text-sm font-medium border border-accent/50 rounded-full px-5 py-3 hover:border-accent hover:bg-accent/10 transition-all duration-300"
    >
      <HiArrowDownTray className="text-lg" />
      {t('download-cv')}
    </a>
  );
};

export default DownloadPdfBtn;
