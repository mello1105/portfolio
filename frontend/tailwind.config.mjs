/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0c1821',
        background: '#d3c7ad',
        secondary: '#754437',
        accent: '#754437',
        muted: '#6b6751',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
