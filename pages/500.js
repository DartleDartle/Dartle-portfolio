import StatusPage from '../components/StatusPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ServerError() {
  return <StatusPage code={500} titleKey="500-title" />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
