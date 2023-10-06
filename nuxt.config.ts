// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@sidebase/nuxt-auth'],
  auth: {
    provider: {
      type: 'local'
    }
  },
  components: [{ path: '~/tabs' }, '~/components'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  routeRules: {
    '/': { redirect: '/profile' }
  },
  ssr: false
})
