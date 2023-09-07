import './assets/css/main.css'
import 'vuetify/dist/vuetify.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
            md,
        },
    },
    themes: {
        light: {
            primary: '#305133',
            secondary: '#9DDB80',
            onPrimary: '#FFFFFF',
            onSecondary: '#FFFFFF',
            accent: '#8c9eff',
            error: '#b71c1c',
        },
    },
})

createApp(App).use(vuetify).use(VueRouter).mount('#app')
