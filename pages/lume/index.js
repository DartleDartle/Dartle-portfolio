import Image from 'next/image';

import VideoBlock from '../../components/Videoblock';
import Seo from '../../components/Seo';
import { BackToWork, CaseStudyBackground } from '../../components/CaseStudy';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function LumeCaseStudy() {
  const { t } = useTranslation('common');

  const slices = [
    { type: 'image', filename: 'slice-01.webp', width: 1440, height: 3059, altKey: 'lume-alt-01' },
    { type: 'video', filename: 'slice-02.webm', width: 1440, height: 900, altKey: 'lume-alt-02' },
    { type: 'image', filename: 'slice-03.webp', width: 1440, height: 1972, altKey: 'lume-alt-03' },
    { type: 'video', filename: 'slice-04.webm', width: 1440, height: 918, altKey: 'lume-alt-04' },
    { type: 'image', filename: 'slice-05.webp', width: 1440, height: 4781, altKey: 'lume-alt-05' },
    { type: 'video', filename: 'slice-06.webm', width: 1440, height: 1427, altKey: 'lume-alt-06' },
    { type: 'image', filename: 'slice-07.webp', width: 1440, height: 780, altKey: 'lume-alt-07' },
    { type: 'video', filename: 'slice-08.webm', width: 1440, height: 1300, altKey: 'lume-alt-08' },
    { type: 'image', filename: 'slice-09.webp', width: 1440, height: 3090, altKey: 'lume-alt-09' },
    { type: 'video', filename: 'slice-10.webm', width: 1440, height: 895, altKey: 'lume-alt-10' },
    { type: 'image', filename: 'slice-11.webp', width: 1440, height: 7532, altKey: 'lume-alt-11' },
  ];

  return (
    <>
      <Seo
        title="Lume Energy - Case Study"
        description={t('lume-meta-desc')}
        image="/thumb1-1.png"
      />
      <CaseStudyBackground src="/lume-project/lume-bg.webm" overlayClassName="bg-black/60" />
      <main className="relative z-10 flex flex-col items-center w-full py-0 md:py-10">

        <section className="sr-only">
          <h1>{t('lume-sr-title')}</h1>
          <p>{t('lume-sr-role')}</p>
          <p>{t('lume-sr-summary')}</p>
          <p>{t('lume-sr-method')}</p>
          <p>{t('lume-sr-insight')}</p>
          <p>{t('lume-sr-solution')}</p>
          <p>{t('lume-sr-accessibility')}</p>
          <h2>{t('lume-sr-deliverables-heading')}</h2>
          <p>{t('lume-sr-deliverables')}</p>
        </section>

        <BackToWork />

        <div className="w-full max-w-[1360px] flex flex-col mx-auto bg-[#0a0a0a] rounded-none md:rounded-[40px] overflow-hidden md:shadow-2xl md:shadow-black/80 md:ring-1 md:ring-white/10">
          {slices.map((slice, index) => (
            <div key={index} className={`w-full relative flex ${index > 0 ? '-mt-[1px]' : ''}`}>
              
              {slice.type === 'video' ? (
                <VideoBlock slice={slice} projectFolder="lume-project" alt={t(slice.altKey)} />
              ) : (
                <Image
                  src={`/lume-project/${slice.filename}`}
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
              )}
              
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