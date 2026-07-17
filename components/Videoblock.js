import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const VideoBlock = ({ slice, projectFolder }) => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const videoSrc = `/${projectFolder}/${slice.filename}`;
  const posterFilename = slice.filename.replace(/\.webm$/i, '-poster.webp');
  const posterSrc = `/${projectFolder}/${posterFilename}`;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateDevice = () => setIsMobile(mediaQuery.matches);

    updateDevice();
    mediaQuery.addEventListener('change', updateDevice);

    return () => {
      mediaQuery.removeEventListener('change', updateDevice);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isMobile || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [isMobile, videoSrc]);

  if (isMobile) {
    return (
      <Image
        src={posterSrc}
        alt=""
        width={slice.width}
        height={slice.height}
        sizes="100vw"
        className="block h-auto w-full"
        unoptimized
      />
    );
  }

  return (
    <video
      key={videoSrc}
      ref={videoRef}
      src={videoSrc}
      poster={posterSrc}
      width={slice.width}
      height={slice.height}
      loop
      muted
      playsInline
      preload="metadata"
      className="block h-auto w-full bg-black"
    />
  );
};

export default VideoBlock;