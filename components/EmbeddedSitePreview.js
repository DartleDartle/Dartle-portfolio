import { useEffect, useRef, useState } from 'react';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

const EmbeddedSitePreview = ({ src, title, label }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.getBoundingClientRect().width;
      setScale(width / DESIGN_WIDTH);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-primary/10 bg-white shadow-xl shadow-black/5">
      <div className="flex items-center gap-x-2 px-4 py-3 bg-primary/5 border-b border-primary/10">
        <div className="flex items-center gap-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary/15"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-primary/15"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-primary/15"></span>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-[12px] text-primary/50 tracking-wide">{label}</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-white"
        style={{ aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}` }}
      >
        {scale > 0 && (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="absolute top-0 left-0 border-0"
            style={{
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EmbeddedSitePreview;
