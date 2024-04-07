// next link
import Link from "next/link";

// icons
import { HiArrowRight } from 'react-icons/hi2'

//translation
import { useTranslation } from 'next-i18next';

const ProjectsBtn = () => {
  const { t } = useTranslation('common');

  return <div className="mx-auto xl:mx-0">
    <Link 
  href={'/work'} 
  className="relative left-16 w-[185px] h-[185px] flex justify-center items-center group"
>
  <h1 className="absolute -left-16 inline cursor-pointer text-xl font-medium before:bg-orange-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out group-hover:before:origin-bottom-left group-hover:before:scale-x-100">{t('button')}</h1>
  <HiArrowRight className="absolute ml-5 text-4xl transition-all duration-300 group-hover:translate-x-2" />
</Link>

  </div>;
};

export default ProjectsBtn;
