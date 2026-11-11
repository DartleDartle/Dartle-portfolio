import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import { useIsDesktop } from '../hooks/useIsDesktop';

// blurred looping video behind the slice container (desktop only, skipped with reduced motion)
export const CaseStudyBackground = ({ src, overlayClassName = 'bg-black/10' }) => {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  return (
    <div className="hidden md:block fixed inset-0 z-0 w-full h-full bg-[#0a0a0a]">
      {isDesktop && !reduceMotion && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      )}
      <div className={`absolute inset-0 backdrop-blur-sm ${overlayClassName}`}></div>
    </div>
  );
};

export const BackToWork = () => {
  const { t } = useTranslation('common');

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
      <Link
        href="/work"
        aria-label={t('back-to-work')}
        className="flex items-center justify-center min-h-[48px] min-w-[48px] bg-black/40 backdrop-blur-md text-white p-3 md:px-4 md:py-2 rounded-full hover:bg-white/20 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out border border-white/10 shadow-lg focus-visible:outline-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6 md:w-5 md:h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <span className="hidden md:block font-medium text-sm tracking-wide ml-2" aria-hidden="true">Portfolio</span>
      </Link>
    </div>
  );
};
