import { createApp } from 'vue'
import './style.css'
import AppStart from './AppStart.vue'
import i18n from './i18n'

const app = createApp(AppStart)
app.use(i18n)
app.mount('#app')
