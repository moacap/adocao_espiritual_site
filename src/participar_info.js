import { createApp } from 'vue'
import './style.css'
import AppParticiparInfo from './AppParticiparInfo.vue'
import i18n from './i18n'

const app = createApp(AppParticiparInfo)
app.use(i18n)
app.mount('#app')
