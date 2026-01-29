// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mello1105.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});