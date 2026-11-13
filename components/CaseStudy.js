import Link from 'next/link';
import { useTranslation } from 'next-i18next';

// Negative delays start each blob mid-cycle so nothing sits still on page load.
const BLOB_SLOTS = [
  { top: '-25%', left: '-20%', w: '75vmax', h: '55vmax', animation: 'blob-drift-a 19s -6s' },
  { top: '35%', left: '50%', w: '65vmax', h: '45vmax', animation: 'blob-drift-b 16s -3s' },
  { top: '50%', left: '-15%', w: '70vmax', h: '50vmax', animation: 'blob-drift-c 22s -11s' },
  { top: '-30%', left: '40%', w: '80vmax', h: '55vmax', animation: 'blob-drift-b 25s -17s' },
  { top: '20%', left: '15%', w: '55vmax', h: '40vmax', animation: 'blob-drift-c 17s -8s' },
];

// animated mesh gradient behind the slice container (desktop only); colors: up to 5 six-digit hex values
export const CaseStudyGradient = ({ base, colors, overlayClassName = 'bg-black/10' }) => (
  <div className="hidden md:block fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: base }} aria-hidden="true">
    {colors.map((color, i) => (
      <div
        key={i}
        className="gradient-blob"
        style={{
          top: BLOB_SLOTS[i].top,
          left: BLOB_SLOTS[i].left,
          width: BLOB_SLOTS[i].w,
          height: BLOB_SLOTS[i].h,
          background: `radial-gradient(ellipse, ${color} 0%, ${color}99 35%, transparent 70%)`,
          animation: `${BLOB_SLOTS[i].animation} ease-in-out infinite alternate`,
        }}
      />
    ))}
    <div className={`absolute inset-0 ${overlayClassName}`}></div>
  </div>
);

export const BackToWork = () => {
  const { t } = useTranslation('common');

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
      <Link
        href="/work"
        aria-label={t('back-to-work')}
        className="flex items-center justify-center min-h-[48px] min-w-[48px] bg-black/60 backdrop-blur-md text-white p-3 md:px-4 md:py-2 rounded-full hover:bg-black/80 active:scale-[0.97] transition-[background-color,transform] duration-200 ease-out border border-white/10 shadow-lg focus-visible:outline-white"
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
