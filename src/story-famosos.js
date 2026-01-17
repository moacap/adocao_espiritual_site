import { createApp } from 'vue'
import './style.css'
import AppStoryFamosos from './AppStoryFamosos.vue'
import i18n from './i18n'

const app = createApp(AppStoryFamosos)
app.use(i18n)
app.mount('#app')
