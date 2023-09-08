import './assets/css/main.css'
import 'vuetify/dist/vuetify.min.css'


import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router.js'


// Vuetify
import 'vuetify/styles'
import { createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

const pureTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#305133',
        'primary-darken-1': '#243b26',
        'onPrimary': '#282828',
        secondary: '#9DDB80',
        'secondary-darken-1': '#84b46a',
        error: '#f54762',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

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
    theme: {
        defaultTheme: 'pureTheme',
        themes: {
            pureTheme,
        },
    },
})

createApp(App).use(vuetify).use(VueRouter).mount('#app')
