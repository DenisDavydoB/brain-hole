import i18next, { i18n as i18nInstance } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resources from './i18resources/index.js'

const createI18n = async (): Promise<i18nInstance> => {
  const i18n = i18next.createInstance().use(initReactI18next)
  i18n.use(LanguageDetector.default)
  await i18n.init({ resources, fallbackLng: 'en', debug: false })

  return i18n
}

export const i18n = createI18n()
