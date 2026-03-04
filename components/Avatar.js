import Image from "next/image";

const Avatar = () => {
  return (
    <div className="
      absolute
      bottom-80
      xl:bottom-0
      right-0
      w-[clamp(260px,35vw,520px)]
      aspect-[737/678]
      pointer-events-none
    ">
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