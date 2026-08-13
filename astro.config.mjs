// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://harishankert.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});