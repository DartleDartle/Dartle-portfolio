import Image from 'next/image';

import Seo from '../../components/Seo';
import { BackToWork, CaseStudyBackground } from '../../components/CaseStudy';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const slices = [
  { filename: 'slice-01.webp?v=2', width: 2880, height: 2120, altKey: 'viadiguinceri-alt-01' },
  { filename: 'slice-02.webp', width: 2880, height: 1766, altKey: 'viadiguinceri-alt-02' },
  { filename: 'slice-03.webp?v=2', width: 2880, height: 2962, altKey: 'viadiguinceri-alt-03' },
  { filename: 'slice-04.webp', width: 2880, height: 2312, altKey: 'viadiguinceri-alt-04' },
  { filename: 'slice-05.webp?v=2', width: 2880, height: 3722, altKey: 'viadiguinceri-alt-05' },
  { filename: 'slice-06.webp', width: 2880, height: 2941, altKey: 'viadiguinceri-alt-06' },
  { filename: 'slice-07.webp', width: 2880, height: 2996, altKey: 'viadiguinceri-alt-07' },
  { filename: 'slice-08.webp?v=2', width: 2880, height: 3838, altKey: 'viadiguinceri-alt-08' },
  { filename: 'slice-09.webp', width: 2880, height: 3126, altKey: 'viadiguinceri-alt-09' },
  { filename: 'slice-10.webp', width: 2880, height: 1604, altKey: 'viadiguinceri-alt-10' },
  { filename: 'slice-11.webp?v=2', width: 2880, height: 2881, altKey: 'viadiguinceri-alt-11' },
  { filename: 'slice-12.webp', width: 2880, height: 2810, altKey: 'viadiguinceri-alt-12' },
  { filename: 'slice-13.webp?v=2', width: 2880, height: 2484, altKey: 'viadiguinceri-alt-13' },
  { filename: 'slice-14.webp', width: 2880, height: 4274, altKey: 'viadiguinceri-alt-14' },
  { filename: 'slice-15.webp', width: 2880, height: 3436, altKey: 'viadiguinceri-alt-15' },
  { filename: 'slice-16.webp', width: 2880, height: 4286, altKey: 'viadiguinceri-alt-16' },
  { filename: 'slice-17.webp', width: 2880, height: 2206, altKey: 'viadiguinceri-alt-17' },
  { filename: 'slice-18.webp', width: 2880, height: 2852, altKey: 'viadiguinceri-alt-18' },
  { filename: 'slice-19.webp', width: 2880, height: 2720, altKey: 'viadiguinceri-alt-19' },
  { filename: 'slice-20.webp', width: 2880, height: 2620, altKey: 'viadiguinceri-alt-20' },
  { filename: 'slice-21.webp', width: 2880, height: 3252, altKey: 'viadiguinceri-alt-21' },
  { filename: 'slice-22.webp', width: 2880, height: 2052, altKey: 'viadiguinceri-alt-22' },
];

export default function ViaDiGuinceriCaseStudy() {
  const { t } = useTranslation('common');

  return (
    <>
      <Seo
        title="Via di Guinceri - Case Study"
        description={t('viadiguinceri-meta-desc')}
        image="/viadiguinceri-og.jpg?v=2"
      />
      <CaseStudyBackground src="/viadiguinceri-project/viadiguinceri-bg.webm" overlayClassName="bg-black/60" />
      <main className="relative z-10 flex flex-col items-center w-full py-0 md:py-10">

        <section className="sr-only">
          <h1>{t('viadiguinceri-sr-title')}</h1>
          <p>{t('viadiguinceri-sr-role')}</p>
          <p>{t('viadiguinceri-sr-summary')}</p>
          <h2>{t('viadiguinceri-sr-process-heading')}</h2>
          <ol>
            <li>{t('viadiguinceri-sr-process-1')}</li>
            <li>{t('viadiguinceri-sr-process-2')}</li>
            <li>{t('viadiguinceri-sr-process-3')}</li>
            <li>{t('viadiguinceri-sr-process-4')}</li>
          </ol>
        </section>

        <BackToWork />

        <div className="w-full max-w-[1360px] flex flex-col mx-auto bg-[#0a0a0a] rounded-none md:rounded-[40px] overflow-hidden md:shadow-2xl md:shadow-black/80 md:ring-1 md:ring-white/10">
          {slices.map((slice, index) => (
            <div key={slice.filename} className={`w-full relative flex ${index > 0 ? '-mt-[1px]' : ''}`}>
              <Image
                src={`/viadiguinceri-project/${slice.filename}`}
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
