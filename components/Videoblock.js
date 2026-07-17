import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const VideoBlock = ({ slice, projectFolder }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const videoSrc = `/${projectFolder}/${slice.filename}`;
  const posterFilename = slice.filename.replace(/\.webm$/i, '-poster.webp');
  const posterSrc = `/${projectFolder}/${posterFilename}`;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateDevice = () => setIsMobile(mediaQuery.matches);

    updateDevice();
    mediaQuery.addEventListener('change', updateDevice);

    return () => mediaQuery.removeEventListener('change', updateDevice);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.55,
        rootMargin: '0px',
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoadVideo || !isInView) return;

    video.play().catch(() => {});

    return () => video.pause();
  }, [shouldLoadVideo, isInView]);

  return (
    <div
      ref={containerRef}
      className="relative block w-full"
      style={{ aspectRatio: `${slice.width} / ${slice.height}` }}
    >
      {!shouldLoadVideo && (
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
      )}

      {shouldLoadVideo && (
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          poster={posterSrc}
          width={slice.width}
          height={slice.height}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="block h-auto w-full"
        />
      )}
    </div>
  );
};

export default VideoBlock;