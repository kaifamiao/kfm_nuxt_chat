// plugins/piniaPersistedState.client.js
import { defineNuxtPlugin } from '#app'
import { usePinia } from '#imports'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = usePinia()
    pinia.use(piniaPluginPersistedstate)
})
