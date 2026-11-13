import Image from 'next/image';

// `variants`: widths of pre-resized copies saved as `name-<width>w.webp`, ascending.
// Any request wider than the largest copy gets the untouched original file, never a re-encode.
const variantLoader = (variants) => ({ src, width }) => {
  const match = variants.find((v) => v >= width);
  return match ? src.replace(/\.webp(\?|$)/, `-${match}w.webp$1`) : src;
};

const CaseStudyImage = ({ src, alt, variants = [], ...props }) => (
  <Image
    src={src}
    alt={alt}
    loader={variantLoader(variants)}
    sizes="(max-width: 1360px) 100vw, 1360px"
    style={{ width: '100%', height: 'auto', display: 'block' }}
    {...props}
  />
);

export default CaseStudyImage;
