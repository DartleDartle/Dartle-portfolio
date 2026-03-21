import Link from "next/link";

import { HiArrowRight } from 'react-icons/hi2'

import { useTranslation } from 'next-i18next';

const ProjectsBtn = () => {
  const { t } = useTranslation('common');

  return (
    <div className="mx-auto xl:mx-0">
      <Link 
        href={'/work'} 
        className="flex items-center justify-center xl:justify-start gap-x-4 group py-4"
      >
        <h1 className="relative inline cursor-pointer text-xl font-medium before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out group-hover:before:origin-bottom-left group-hover:before:scale-x-100">
          {t('button')}
        </h1>
        <HiArrowRight className="text-4xl transition-all duration-300 group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;