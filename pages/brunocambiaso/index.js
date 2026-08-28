import Head from 'next/head';
import Link from 'next/link';

import EmbeddedSitePreview from '../../components/EmbeddedSitePreview';

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
      <Head>
        <title>Bruno Cambiaso - Artist Portfolio</title>
        <meta name="description" content={t('brunocambiaso-meta-desc')} />
      </Head>

      <div className="absolute inset-0 bg-gradient-to-r from-grey/10 via-white/30 to-white/10" />

      <div className="relative z-10 container mx-auto px-4 min-h-[100svh] flex items-start xl:items-center pt-52 xl:pt-28 pb-28 xl:pb-16">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="w-full max-w-4xl mx-auto"
        >
          <Link
            href="/work"
            className="flex w-fit items-center gap-x-2 text-sm text-primary/60 hover:text-accent transition-all duration-300 mb-12"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-4 md:h-4"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="hidden md:inline">Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-block text-[12px] uppercase tracking-[0.2em] font-medium text-accent border border-accent/40 rounded-full px-4 py-1.5">
              {t('brunocambiaso-category')}
            </div>
            <div className="inline-block text-[12px] uppercase tracking-[0.2em] font-medium text-accent border border-accent/40 rounded-full px-4 py-1.5">
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
            <span className="text-sm opacity-60">{t('brunocambiaso-tech-label')}</span>
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
              title="Bruno Cambiaso — anteprima del sito"
              label={t('brunocambiaso-preview-label')}
            />
          </div>

          <div className="mt-8 flex justify-center xl:justify-start">
            <Link
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative btn rounded-full border border-accent px-8 transition-all duration-300 flex items-center justify-center gap-x-2 hover:bg-accent/10"
            >
              {t('brunocambiaso-visit-btn')}
              <HiArrowTopRightOnSquare className="text-lg" />
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
