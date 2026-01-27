import { createApp } from 'vue'
import './style.css'
import AppFormation from './AppFormation.vue'
import i18n from './i18n'

const app = createApp(AppFormation)
app.use(i18n)
app.mount('#app')
