import { createApp } from 'vue'
import './style.css'
import AppDonate from './AppDonate.vue'
import i18n from './i18n'

const app = createApp(AppDonate)
app.use(i18n)
app.mount('#app')
