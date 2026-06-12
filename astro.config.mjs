import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.wegofulfill.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
  compressHTML: true,
});
