import { createApp } from 'vue'
import AppParticiparInfo from './AppParticiparInfo.vue'
import { createI18n } from 'vue-i18n'
import './style.css'

// Import translations
import pt from './locales/pt.json'
import en from './locales/en.json'
import es from './locales/es.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
    en,
    es
  }
})

createApp(AppParticiparInfo).use(i18n).mount('#app')
