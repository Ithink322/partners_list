// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      title: "Partners list",
    },
  },

  css: ["~/assets/styles/main.scss"],

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
