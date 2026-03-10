/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0D0D0D',
        'bg-secondary': '#111827',
        'gold': '#F5C518',
        'purple-magic': '#7B2FBE',
        'purple-light': '#A855F7',
        'text-primary': '#E8E8E8',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'coin-spin': 'coin-spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px #F5C51840' },
          '50%': { boxShadow: '0 0 40px #F5C518, 0 0 80px #F5C51840' },
        },
        'coin-spin': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
