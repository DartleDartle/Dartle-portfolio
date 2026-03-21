import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Image
        src="/avatarz.png?v=2"
        alt="Davide"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
};

export default Avatar;