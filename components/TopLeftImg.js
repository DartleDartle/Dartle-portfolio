// next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div 
      className="absolute left-0 top-0  z-0 w-[100px] xl:w-[300px] opacity-80"
    > 
      <Image src="/top-image-left.png" width={400} height={400}  alt='' />
    </div>
    );
};

export default TopLeftImg;
