import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = 'https://www.davide-pintore.site';

// title, description, canonical, hreflang and Open Graph for one page
const Seo = ({ title, description, image = '/avatarz.png', noindex = false }) => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];

  const urlFor = (lng) => {
    const prefix = lng === defaultLocale ? '' : `/${lng}`;
    if (path === '/') return `${SITE_URL}${prefix || '/'}`;
    return `${SITE_URL}${prefix}${path}`;
  };

  if (noindex) {
    return (
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex" />
      </Head>
    );
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={urlFor(locale)} />
      {locales.map((lng) => (
        <link key={lng} rel="alternate" hrefLang={lng} href={urlFor(lng)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={urlFor(defaultLocale)} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Davide Pintore" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={urlFor(locale)} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:locale" content={locale === 'it' ? 'it_IT' : 'en_GB'} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
