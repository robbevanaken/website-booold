// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI,
    public: {
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI,
    },
  },

  css: ['@@/assets/css/main.css'],

  devServer: {
    port: 3002,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ]
})
