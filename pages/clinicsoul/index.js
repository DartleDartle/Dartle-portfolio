import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import VideoBlock from '../../components/Videoblock';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ClinicSoulCaseStudy() {
  const slices = [
    { type: 'image', filename: 'slice-01.webp', width: 2048, height: 1152 },
    { type: 'video', filename: 'slice-02.webm', width: 2048, height: 1025.5 },
    { type: 'video', filename: 'slice-03.webm', width: 2048, height: 891 },
    { type: 'image', filename: 'slice-04.webp', width: 2048, height: 1372 },
    { type: 'image', filename: 'slice-05.webp', width: 2048, height: 1238 },
    { type: 'image', filename: 'slice-06.webp', width: 2048, height: 1307 },
    { type: 'video', filename: 'slice-07.webm', width: 2048, height: 1476 },
    { type: 'image', filename: 'slice-08.webp', width: 2048, height: 1457 },
    { type: 'image', filename: 'slice-09.webp', width: 2048, height: 1224 },
    { type: 'video', filename: 'slice-10.webm', width: 2048, height: 1116 },
    { type: 'video', filename: 'slice-11.webm', width: 2048, height: 1054.5 },
    { type: 'image', filename: 'slice-12.webp', width: 2048, height: 1534 },
    { type: 'image', filename: 'slice-13.webp', width: 2048, height: 1228 },
    { type: 'image', filename: 'slice-14.webp', width: 2048, height: 941 },
    { type: 'image', filename: 'slice-15.webp', width: 2048, height: 944 },
    { type: 'image', filename: 'slice-16.webp', width: 2048, height: 1753 },
    { type: 'image', filename: 'slice-17.webp', width: 2048, height: 3015 },
    { type: 'image', filename: 'slice-18.webp', width: 2048, height: 1845 },
  ];

  return (
    <>
      <Head>
        <title>ClinicSoul - UX Case Study</title>
        <meta name="description" content="Case study del progetto UX Clinic Soul." />
      </Head>
      <div className="hidden md:block fixed inset-0 z-0 w-full h-full">
        <video
          src="/clinicsoul-project/clinicsoul-bg.webm" 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
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

        <div className="w-full max-w-[1360px] flex flex-col mx-auto bg-[#0a0a0a] rounded-none md:rounded-[40px] overflow-hidden md:shadow-2xl md:shadow-black/80 md:ring-1 md:ring-white/10">
          {slices.map((slice, index) => (
            <div key={index} className={`w-full relative flex ${index > 0 ? '-mt-[1px]' : ''}`}>
              
              {slice.type === 'video' ? (
                <VideoBlock slice={slice} projectFolder="clinicsoul-project" />
              ) : (
                <Image
                  src={`/clinicsoul-project/${slice.filename}`}
                  alt={`ClinicSoul Case Study - Sezione ${index + 1}`}
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