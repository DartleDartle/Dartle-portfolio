// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link 
      href={'/work'} 
      className="relative left-12 w-[185px] h-[185px] flex justify-center items-center 
       group"
    >
      <h1 className="absolute -left-16 inline cursor-pointer text-xl font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100 group"> My Projects </h1>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
     
    </Link>
  </div>;
};

export default ProjectsBtn;
