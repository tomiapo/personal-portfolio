import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://tomas-apochian.dev/',
  i18n: {
    defaultLocale: 'es',
    locales: ["es", "en"]
  },
  output : 'static',
  adapter : vercelStatic({
    webAnalytics : {
      enabled : true
    },
  })
})
