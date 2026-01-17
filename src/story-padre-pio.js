import { createApp } from 'vue'
import './style.css'
import AppStoryPadrePio from './AppStoryPadrePio.vue'
import i18n from './i18n'

const app = createApp(AppStoryPadrePio)
app.use(i18n)
app.mount('#app')
