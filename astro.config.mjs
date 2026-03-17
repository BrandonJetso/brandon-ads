import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  site: 'https://brandon-ads.thebrandonapp.workers.dev',
  adapter: cloudflare(),
});