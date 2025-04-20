// Amadeus Fidos u22526162
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      githubUsername: process.env.GITHUB_USERNAME
    }
  },

  modules: ['@nuxt/image']
})