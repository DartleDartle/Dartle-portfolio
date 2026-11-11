import Image from 'next/image';

import VideoBlock from '../../components/Videoblock';
import Seo from '../../components/Seo';
import { BackToWork, CaseStudyBackground } from '../../components/CaseStudy';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function ClinicSoulCaseStudy() {
  const { t } = useTranslation('common');

  const slices = [
    { type: 'image', filename: 'slice-01.webp', width: 2048, height: 1152, altKey: 'clinicsoul-alt-01' },
    { type: 'video', filename: 'slice-02.webm', width: 2048, height: 1025.5, altKey: 'clinicsoul-alt-02' },
    { type: 'video', filename: 'slice-03.webm', width: 2048, height: 891, altKey: 'clinicsoul-alt-03' },
    { type: 'image', filename: 'slice-04.webp', width: 2048, height: 1372, altKey: 'clinicsoul-alt-04' },
    { type: 'image', filename: 'slice-05.webp', width: 2048, height: 1238, altKey: 'clinicsoul-alt-05' },
    { type: 'image', filename: 'slice-06.webp', width: 2048, height: 1307, altKey: 'clinicsoul-alt-06' },
    { type: 'video', filename: 'slice-07.webm', width: 2048, height: 1476, altKey: 'clinicsoul-alt-07' },
    { type: 'image', filename: 'slice-08.webp', width: 2048, height: 1457, altKey: 'clinicsoul-alt-08' },
    { type: 'image', filename: 'slice-09.webp', width: 2048, height: 1224, altKey: 'clinicsoul-alt-09' },
    { type: 'video', filename: 'slice-10.webm', width: 2048, height: 1116, altKey: 'clinicsoul-alt-10' },
    { type: 'video', filename: 'slice-11.webm', width: 2048, height: 1054.5, altKey: 'clinicsoul-alt-11' },
    { type: 'image', filename: 'slice-12.webp', width: 2048, height: 1534, altKey: 'clinicsoul-alt-12' },
    { type: 'image', filename: 'slice-13.webp', width: 2048, height: 1228, altKey: 'clinicsoul-alt-13' },
    { type: 'image', filename: 'slice-14.webp', width: 2048, height: 941, altKey: 'clinicsoul-alt-14' },
    { type: 'image', filename: 'slice-15.webp', width: 2048, height: 944, altKey: 'clinicsoul-alt-15' },
    { type: 'image', filename: 'slice-16.webp', width: 2048, height: 1753, altKey: 'clinicsoul-alt-16' },
    { type: 'image', filename: 'slice-17.webp', width: 2048, height: 3015, altKey: 'clinicsoul-alt-17' },
    { type: 'image', filename: 'slice-18.webp', width: 2048, height: 1845, altKey: 'clinicsoul-alt-18' },
  ];

  return (
    <>
      <Seo
        title="ClinicSoul - UX Case Study"
        description={t('clinicsoul-meta-desc')}
        image="/thumb1-2.png"
      />
      <CaseStudyBackground src="/clinicsoul-project/clinicsoul-bg.webm" overlayClassName="bg-black/10" />
      <main className="relative z-10 flex flex-col items-center w-full py-0 md:py-10">

        <section className="sr-only">
          <h1>{t('clinicsoul-sr-title')}</h1>
          <p>{t('clinicsoul-sr-role')}</p>
          <p>{t('clinicsoul-sr-summary')}</p>
          <p>{t('clinicsoul-sr-discovery')}</p>
          <p>{t('clinicsoul-sr-method')}</p>
          <h2>{t('clinicsoul-sr-deliverables-heading')}</h2>
          <p>{t('clinicsoul-sr-deliverables')}</p>
        </section>

        <BackToWork />

        <div className="w-full max-w-[1360px] flex flex-col mx-auto bg-[#0a0a0a] rounded-none md:rounded-[40px] overflow-hidden md:shadow-2xl md:shadow-black/80 md:ring-1 md:ring-white/10">
          {slices.map((slice, index) => (
            <div key={index} className={`w-full relative flex ${index > 0 ? '-mt-[1px]' : ''}`}>
              
              {slice.type === 'video' ? (
                <VideoBlock slice={slice} projectFolder="clinicsoul-project" alt={t(slice.altKey)} />
              ) : (
                <Image
                  src={`/clinicsoul-project/${slice.filename}`}
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