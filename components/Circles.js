// next image
import Image from "next/image";

//

const Circles = () => {
  return (
  <div className="absolute w-[200px] xl:invisible sm:w-[260px] right-32 bottom-32 z-10">
    <Image 
      src={'/computer.png'} 
      width={260} 
      height={200} 
      className="w-full h-full" 
      alt= ""
    />
  </div>
  );
};

export default Circles;
