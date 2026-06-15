import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://wegofulfill.com',
  output: "hybrid",

  build: {
    assets: 'assets',
  },

  compressHTML: true,

  integrations: [sitemap({
      serialize(item) {
        return item;
      }
    })],

  adapter: cloudflare()
});