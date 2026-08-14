import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useIsDesktop } from '../../hooks/useIsDesktop';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function FisiogestCaseStudy() {
  const { t } = useTranslation('common');
  const isDesktop = useIsDesktop();

  // NOTE: slice-18, slice-19 and slice-21 were corrupted during an
  // asset-optimization pass and are temporarily omitted. Re-add them here
  // once the originals are replaced.
  const slices = [
    { type: 'image', filename: 'slice-01.webp', width: 2880, height: 2116, altKey: 'fisiogest-alt-01' },
    { type: 'image', filename: 'slice-02.webp', width: 2880, height: 2020, altKey: 'fisiogest-alt-02' },
    { type: 'image', filename: 'slice-03.webp', width: 2880, height: 2588, altKey: 'fisiogest-alt-03' },
    { type: 'image', filename: 'slice-04.webp', width: 2880, height: 2526, altKey: 'fisiogest-alt-04' },
    { type: 'image', filename: 'slice-05.webp', width: 2880, height: 1958, altKey: 'fisiogest-alt-05' },
    { type: 'image', filename: 'slice-06.webp', width: 2880, height: 1420, altKey: 'fisiogest-alt-06' },
    { type: 'image', filename: 'slice-07.webp', width: 2880, height: 1620, altKey: 'fisiogest-alt-07' },
    { type: 'image', filename: 'slice-08.webp', width: 2880, height: 2590, altKey: 'fisiogest-alt-08' },
    { type: 'image', filename: 'slice-09.webp', width: 2880, height: 2914, altKey: 'fisiogest-alt-09' },
    { type: 'image', filename: 'slice-10.webp', width: 2880, height: 2364, altKey: 'fisiogest-alt-10' },
    { type: 'image', filename: 'slice-11.webp', width: 2880, height: 2364, altKey: 'fisiogest-alt-11' },
    { type: 'image', filename: 'slice-12.webp', width: 2880, height: 1914, altKey: 'fisiogest-alt-12' },
    { type: 'image', filename: 'slice-13.webp', width: 2880, height: 2890, altKey: 'fisiogest-alt-13' },
    { type: 'image', filename: 'slice-14.webp', width: 2880, height: 2426, altKey: 'fisiogest-alt-14' },
    { type: 'image', filename: 'slice-15.webp', width: 2880, height: 3896, altKey: 'fisiogest-alt-15' },
    { type: 'image', filename: 'slice-16.webp', width: 2880, height: 3768, altKey: 'fisiogest-alt-16' },
    { type: 'image', filename: 'slice-17.webp', width: 2880, height: 2860, altKey: 'fisiogest-alt-17' },
    { type: 'image', filename: 'slice-20.webp', width: 2880, height: 3370, altKey: 'fisiogest-alt-20' },
    { type: 'image', filename: 'slice-22.webp', width: 2880, height: 3306, altKey: 'fisiogest-alt-22' },
  ];

  return (
    <>
      <Head>
        <title>Fisiogest - Clinic Management Platform</title>
        <meta name="description" content={t('fisiogest-meta-desc')} />
      </Head>
      <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
        {isDesktop && (
          <video
            src="/fisiogest-project/fisiogest-bg.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>
      <main className="relative z-10 flex flex-col items-center w-full py-0 md:py-10">

        <section className="sr-only">
          <h1>{t('fisiogest-sr-title')}</h1>
          <p>{t('fisiogest-sr-role')}</p>
          <p>{t('fisiogest-sr-summary')}</p>
          <p>{t('fisiogest-sr-process')}</p>
          <h2>{t('fisiogest-sr-workflow-heading')}</h2>
          <ol>
            <li>{t('fisiogest-sr-workflow-1')}</li>
            <li>{t('fisiogest-sr-workflow-2')}</li>
            <li>{t('fisiogest-sr-workflow-3')}</li>
          </ol>
          <h2>{t('fisiogest-sr-designsystem-heading')}</h2>
          <p>{t('fisiogest-sr-designsystem')}</p>
          <h2>{t('fisiogest-sr-deliverables-heading')}</h2>
          <p>{t('fisiogest-sr-deliverables')}</p>
        </section>

        <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
          <Link
            href="/work"
            className="flex items-center justify-center bg-black/40 backdrop-blur-md text-white p-3 md:px-4 md:py-2 rounded-full hover:bg-white/20 transition-all border border-white/10 shadow-lg"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-5 md:h-5"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="hidden md:block font-medium text-sm tracking-wide ml-2">Portfolio</span>
          </Link>
        </div>

        <div className="w-full max-w-[1360px] flex flex-col mx-auto bg-[#0a0a0a] rounded-none md:rounded-[40px] overflow-hidden md:shadow-2xl md:shadow-black/80 md:ring-1 md:ring-white/10">
          {slices.map((slice, index) => (
            <div key={index} className={`w-full relative flex ${index > 0 ? '-mt-[1px]' : ''}`}>
              <Image
                src={`/fisiogest-project/${slice.filename}`}
                alt={t(slice.altKey)}
                width={slice.width}
                height={slice.height}
                sizes="(max-width: 1360px) 100vw, 1360px"
                quality={100}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
