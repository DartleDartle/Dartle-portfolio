import Link from 'next/link';
import Image from 'next/image';

import Seo from '../../components/Seo';
import { BackToWork } from '../../components/CaseStudy';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const FIGMA_URL =
  'https://www.figma.com/design/bS9nJPy8eeMACNjeDcblLI/Esercizio-UX-UI-Design---Davide-Pintore?node-id=12-5&p=f';

export default function CaAssicurazioniCaseStudy() {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-x-hidden">
      <Seo
        title="Crédit Agricole Assicurazioni - UX/UI Redesign"
        description={t('caassicurazioni-meta-desc')}
        image="/thumb1-7.png?v=2"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      <BackToWork />

      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-start xl:items-center pt-28 pb-16">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-block text-[12px] uppercase tracking-[0.2em] font-medium text-accent-ink border border-accent/40 rounded-full px-4 py-1.5">
              {t('caassicurazioni-category')}
            </div>
            <div className="inline-block text-[12px] uppercase tracking-[0.2em] font-medium text-accent-ink border border-accent/40 rounded-full px-4 py-1.5">
              {t('caassicurazioni-category-2')}
            </div>
          </div>

          <h1 className="font-bold leading-[1.05] text-[clamp(34px,5vw,52px)]">
            Crédit Agricole Assicurazioni
          </h1>

          <p className="mt-6 max-w-[62ch] text-base xl:text-lg opacity-80">
            {t('caassicurazioni-description')}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-sm opacity-75">{t('caassicurazioni-process-label')}</span>
            {t('caassicurazioni-process').split(' · ').map((step) => (
              <span
                key={step}
                className="text-[13px] px-3 py-1 rounded-full border border-primary/15 bg-primary/5"
              >
                {step}
              </span>
            ))}
          </div>

          <Link
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-10 block overflow-hidden rounded-2xl ring-1 ring-primary/10 shadow-xl shadow-black/10"
          >
            <Image
              src="/caassicurazioni-cover.webp"
              alt={t('caassicurazioni-preview-alt')}
              width={1920}
              height={960}
              unoptimized
              priority
              className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-end justify-start p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-x-2 rounded-full bg-black/60 backdrop-blur-md text-white text-sm font-medium px-4 py-2 border border-white/10">
                {t('caassicurazioni-preview-label')}
                <span className="sr-only">{` (${t('opens-new-tab')})`}</span>
                <HiArrowTopRightOnSquare className="text-base" aria-hidden="true" />
              </span>
            </span>
          </Link>

          <div className="mt-8 flex justify-center xl:justify-start">
            <Link
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative btn rounded-full border border-accent px-8 transition-[background-color,transform] duration-200 ease-out flex items-center justify-center gap-x-2 hover:bg-accent/10 active:scale-[0.97]"
            >
              {t('caassicurazioni-visit-btn')}
              <span className="sr-only">{` (${t('opens-new-tab')})`}</span>
              <HiArrowTopRightOnSquare className="text-lg" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
