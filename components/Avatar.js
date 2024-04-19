// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:fixed xl:bottom-0 xl:right-0 xl:max-w-none">
  <Image 
    src={'/avatarz.png'} 
    width={737} 
    height={678} 
    alt='' 
    className="translate-z-0 w-full h-full" 
  />
  </div>;
};

export default Avatar;
