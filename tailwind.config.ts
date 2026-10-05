import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d7eeff',
          200: '#b7e1ff',
          300: '#83d0ff',
          400: '#46b9ff',
          500: '#149dff',
          600: '#007ee5',
          700: '#0064bb',
          800: '#085497',
          900: '#0d477c'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.15)',
        neon: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(20,157,255,0.18)'
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
