import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function LumeCaseStudy() {
  const slices = [
    { type: 'image', filename: 'slice-01.webp', width: 1440, height: 3059 },
    { type: 'video', filename: 'slice-02.webm', width: 1440, height: 900 },
    { type: 'image', filename: 'slice-03.webp', width: 1440, height: 1972 },
    { type: 'video', filename: 'slice-04.webm', width: 1440, height: 918 },
    { type: 'image', filename: 'slice-05.webp', width: 1440, height: 4781 },
    { type: 'video', filename: 'slice-06.webm', width: 1440, height: 1427 },
    { type: 'image', filename: 'slice-07.webp', width: 1440, height: 780 },
    { type: 'video', filename: 'slice-08.webm', width: 1440, height: 1300 },
    { type: 'image', filename: 'slice-09.webp', width: 1440, height: 3090 },
    { type: 'video', filename: 'slice-10.webm', width: 1440, height: 895 },
    { type: 'image', filename: 'slice-11.webp', width: 1440, height: 7532 },
  ];

  return (
    <>
      <Head>
        <title>Lume Energy - Case Study</title>
        <meta name="description" content="Case study del progetto UX/UI Lume Energy." />
      </Head>
      <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
        <video
          src="/lume-project/lume-bg.mp4" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <main className="relative z-10 flex flex-col items-center w-full py-0 md:py-10">
        
        <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
          <Link 
            href="/work" 
            className="flex items-center justify-center bg-black/40 backdrop-blur-md text-white p-3 md:px-4 md:py-2 rounded-full hover:bg-white/20 transition-all border border-white/10 shadow-lg"
          >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-6 h-6 md:w-5 md:h-5"
              >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="hidden md:block font-medium text-sm tracking-wide ml-2">Portfolio</span>
          </Link>
        </div>

        <div className="w-full max-w-[1024px] flex flex-col mx-auto rounded-none md:rounded-[40px] overflow-hidden md:shadow-2xl md:shadow-black/80 md:ring-1 md:ring-white/10">
          {slices.map((slice, index) => (
            <div key={index} className="w-full relative flex">
              
              {slice.type === 'video' ? (
                <video
                  src={`/lume-project/${slice.filename}`}
                  poster={`/lume-project/${slice.filename.replace('.mp4', '-poster.webp')}`}
                  width={slice.width}
                  height={slice.height}
                  autoPlay     
                  loop         
                  muted        
                  playsInline  
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              ) : (
                <Image
                  src={`/lume-project/${slice.filename}`}
                  alt={`Lume Energy Case Study - Sezione ${index + 1}`}
                  width={slice.width}     
                  height={slice.height}   
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  style={{
                    width: '100%',
                    height: 'auto',       
                    display: 'block'
                  }}
                  priority={index === 0} 
                  unoptimized={true} 
                />
              )}
              
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
