import { createI18n } from 'vue-i18n';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

const savedLocale = localStorage.getItem('user-locale') || 'PT';

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: savedLocale, // Default locale
  fallbackLocale: 'EN',
  messages: {
    PT: pt,
    EN: en,
    ES: es
  }
});

export default i18n;
