import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Image
        src="/avatarz.png?v=2"
        alt="Davide"
        fill
        priority
        sizes="(max-width: 1279px) 320px, 520px"
        className="object-contain"
      />
    </div>
  );
};

export default Avatar;