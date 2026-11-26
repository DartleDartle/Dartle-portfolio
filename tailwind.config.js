/** @type {import('tailwindcss').Config} */
module.exports = {
  // hover styles only on devices that can really hover (no sticky hover after a tap)
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./pages/**/*.js', './components/**/*.js'],
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
    },
    extend: {
      colors: {
        primary: '#1d1d1d',
        accent: '#f17e41',
        // the same orange, darkened only as far as contrast on the grey ground needs:
        // accent text at #f17e41 reads 2.2:1 there
        'accent-deep': '#c2531b', // 3.8:1, large/bold text and icons
        'accent-ink': '#ad4510', // 4.7:1, small text
        grey: '#efe7dc',
      },
      backgroundImage: {
        site: 'url("/site-bg.svg")',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
};
