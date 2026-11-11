import StatusPage from '../components/StatusPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function NotFound() {
  return <StatusPage code={404} titleKey="404-title" />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
