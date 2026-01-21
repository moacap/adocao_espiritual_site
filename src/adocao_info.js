import { createApp } from 'vue'
import './style.css'
import AppAdocaoInfo from './AppAdocaoInfo.vue'
import i18n from './i18n'

const app = createApp(AppAdocaoInfo)
app.use(i18n)
app.mount('#app')
