// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static output only: dist/ is uploaded as plain files to the addon domain's
// document root. No Node process runs on the shared host.
export default defineConfig({
  site: "https://egypgreen.com",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      // Skip the root redirect, the 404 and the noindex quote cart.
      filter: (page) => !page.endsWith("egypgreen.com/") && !page.includes("/404") && !page.includes("/quote/"),
      i18n: { defaultLocale: "ar", locales: { ar: "ar-EG", en: "en" } },
    }),
  ],
});
