import { createApp } from 'vue'
import './style.css'
import AppStoryTong from './AppStoryTong.vue'
import i18n from './i18n'

const app = createApp(AppStoryTong)
app.use(i18n)
app.mount('#app')
