/** @type {import('tailwindcss').Config} */
module.exports = {
  // hover: styles only on devices that can really hover (no sticky hover after a tap)
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',  
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl: '1920px',
    
    },
    extend: {
      colors: {
        primary: '#1d1d1d',
        secondary: '#1d1d1d',
        accent: '#f17e41',
        // the same orange, darkened only as far as contrast on the grey ground needs:
        // accent text at #f17e41 reads 2.2:1 there
        'accent-deep': '#c2531b', // 3.8:1, large/bold text and icons
        'accent-ink': '#ad4510', // 4.7:1, small text
        grey: '#efe7dc',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/star-circle.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    
    padding: {
      DEFAULT: '15px',
   
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
