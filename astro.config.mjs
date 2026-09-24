import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hautarzt-kempen.de',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
