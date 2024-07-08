import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://fnvecchietti.github.io',
  base: '/fran.github.io',
  integrations: [tailwind()]
});