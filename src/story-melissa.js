import { createApp } from 'vue'
import './style.css'
import AppStoryMelissa from './AppStoryMelissa.vue'
import i18n from './i18n'

const app = createApp(AppStoryMelissa)
app.use(i18n)
app.mount('#app')
