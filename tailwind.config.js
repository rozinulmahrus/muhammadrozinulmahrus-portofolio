/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#121212',
        surfaceHighlight: '#1E1E1E',
        textMain: '#E5E5E5',
        textMuted: '#A3A3A3',
        accentPrimary: '#10B981', // Emerald Green
        accentSecondary: '#06B6D4', // Cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
