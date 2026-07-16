import { useRef, useEffect } from 'react';

const VideoBlock = ({ slice, projectFolder }) => {
  const videoRef = useRef(null);

  const videoSrc = `/${projectFolder}/${slice.filename}`;
  const posterSrc = `/${projectFolder}/${slice.filename.replace('.webm', '-poster.webp')}`;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observer.disconnect();
    };
  }, [videoSrc]);

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
      style={{
        width: '100%',
        height: 'auto',
        display: 'block'
      }}
    />
  );
};

export default VideoBlock;