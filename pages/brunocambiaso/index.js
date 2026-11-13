import Link from 'next/link';

import Seo from '../../components/Seo';
import EmbeddedSitePreview from '../../components/EmbeddedSitePreview';
import { BackToWork } from '../../components/CaseStudy';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const SITE_URL = 'https://www.bruno-cambiaso.site/';

const TECH_STACK = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Sanity CMS',
  'styled-components',
];

export default function BrunoCambiasoCaseStudy() {
  const { t } = useTranslation('common');

  return (
    <div className="relative min-h-[100svh] bg-grey overflow-x-hidden">
      <Seo
        title="Bruno Cambiaso - Artist Portfolio"
        description={t('brunocambiaso-meta-desc')}
        image="/thumb1-5.png"
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
              {t('brunocambiaso-category')}
            </div>
            <div className="inline-block text-[12px] uppercase tracking-[0.2em] font-medium text-accent-ink border border-accent/40 rounded-full px-4 py-1.5">
              {t('brunocambiaso-category-2')}
            </div>
          </div>

          <h1 className="font-bold leading-[1.05] text-[clamp(34px,5vw,52px)]">
            Bruno Cambiaso
          </h1>

          <p className="mt-6 max-w-[62ch] text-base xl:text-lg opacity-80">
            {t('brunocambiaso-description')}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-sm opacity-75">{t('brunocambiaso-tech-label')}</span>
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="text-[13px] px-3 py-1 rounded-full border border-primary/15 bg-primary/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <EmbeddedSitePreview
              src={SITE_URL}
              title={`Bruno Cambiaso, ${t('brunocambiaso-preview-label')}`}
              label={t('brunocambiaso-preview-label')}
            />
          </div>

          <div className="mt-8 flex justify-center xl:justify-start">
            <Link
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative btn rounded-full border border-accent px-8 transition-[background-color,transform] duration-200 ease-out flex items-center justify-center gap-x-2 hover:bg-accent/10 active:scale-[0.97]"
            >
              {t('brunocambiaso-visit-btn')}
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
