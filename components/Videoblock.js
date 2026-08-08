import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useIsDesktop } from '../hooks/useIsDesktop';

const VideoBlock = ({ slice, projectFolder }) => {
  const isDesktop = useIsDesktop();
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  const videoSrc = `/${projectFolder}/${slice.filename}`;
  const posterFilename = slice.filename.replace(/\.webm$/i, '-poster.webp');
  const posterSrc = `/${projectFolder}/${posterFilename}`;

  // Only mount the <video> once it's about to enter the viewport, so at most
  // a couple of decoders are ever alive at once. Latches on: once near, stays
  // near, so scrolling back and forth near the edge can't repeatedly
  // mount/unmount the element. Mobile gets a tighter lookahead than desktop
  // since phones have far less concurrent-decoder headroom.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: isDesktop ? '600px 0px' : '200px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isDesktop]);

  const shouldMountVideo = isNearViewport;

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldMountVideo || !video) return;

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
  }, [shouldMountVideo, videoSrc]);

  return (
    <div ref={containerRef} className="w-full">
      {shouldMountVideo ? (
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
          disablePictureInPicture
          disableRemotePlayback
          className="block h-auto w-full bg-black"
        />
      ) : (
        <Image
          src={posterSrc}
          alt=""
          width={slice.width}
          height={slice.height}
          sizes="100vw"
          className="block h-auto w-full"
        />
      )}
    </div>
  );
};

export default VideoBlock;
