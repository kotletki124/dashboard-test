// https://nuxt.com/docs/api/configuration/nuxt-config
import typescript from '@rollup/plugin-typescript'

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    }
  },
  nitro: {
    rollupConfig: {
      plugins: [typescript({ tsconfig: 'server/tsconfig.json' })]
    }
  },
  vite: {
    build: {
      target: 'ESNext'
    },
    plugins: [typescript()]
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/user' }
      },
      pages: {
        login: '/signin'
      },
      sessionDataType: { id: 'string', email: 'string' }
    },
    globalAppMiddleware: true
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
  typescript: {
    tsConfig: {
      compilerOptions: {
        target: 'ESNext'
      }
    }
  },
  ssr: false
})
