import { useRef, useEffect } from 'react';

const VideoBlock = ({ slice }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 }
    );


    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Cleanup
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={`/lume-project/${slice.filename}`}
      poster={`/lume-project/${slice.filename.replace('.webm', '-poster.webp')}`}
      width={slice.width}
      height={slice.height}
      loop
      muted
      playsInline
      style={{
        width: '100%',
        height: 'auto',
        display: 'block'
      }}
    />
  );
};

export default VideoBlock;