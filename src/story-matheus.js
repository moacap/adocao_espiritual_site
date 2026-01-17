import { createApp } from 'vue'
import './style.css'
import AppStoryMatheus from './AppStoryMatheus.vue'
import i18n from './i18n'

const app = createApp(AppStoryMatheus)
app.use(i18n)
app.mount('#app')
