import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wegofulfill.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
  compressHTML: true,
  integrations: [sitemap({
      serialize(item) {
        return item;
      }
    })],
});