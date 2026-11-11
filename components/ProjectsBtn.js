import Link from "next/link";

import { HiArrowRight } from 'react-icons/hi2'

import { useTranslation } from 'next-i18next';

const ProjectsBtn = () => {
  const { t } = useTranslation('common');

  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/work'}
        className="flex items-center justify-center xl:justify-start gap-x-4 group py-4 rounded-md active:scale-[0.98] transition-transform duration-200 ease-out"
      >
        <span className="relative inline text-xl font-medium before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-out group-hover:before:origin-bottom-left group-hover:before:scale-x-100 group-focus-visible:before:origin-bottom-left group-focus-visible:before:scale-x-100">
          {t('button')}
        </span>
        <HiArrowRight className="text-4xl transition-transform duration-300 ease-out group-hover:translate-x-2" aria-hidden="true" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
