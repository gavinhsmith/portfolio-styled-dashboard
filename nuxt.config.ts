import tailwindcss from "@tailwindcss/vite";

// Built to plain static files with `yarn build` (nuxt generate) -> .output/public
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon"],
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    baseURL: "/",
    head: {
      title: "Homelab",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
});
