import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://osgsm.github.io',
  base: '/github-pages-test',
  integrations: [tailwind()]
});