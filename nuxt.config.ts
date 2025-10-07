// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@@/assets/css/main.css'],

  devServer: {
    port: 3002
  },

  modules: [
    // '@nuxt/content', // Temporarily disabled due to Node version compatibility
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ]
})
