/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#292A2C',
        background: '#FFFFFF',
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
