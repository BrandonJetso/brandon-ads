import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    output: 'static',
    site: 'https://brandon-ads.thebrandonapp.workers.dev',
    integrations: [sitemap()],
});
