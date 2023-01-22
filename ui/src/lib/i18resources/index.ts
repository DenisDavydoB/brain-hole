import EN from './locales/en/translation.json' assert { type: 'json' }
import RU from './locales/ru/translation.json' assert { type: 'json' }

const resources = {
  en: {
    translation: { ...EN },
  },
  ru: {
    translation: { ...RU },
  },
}

export default resources
