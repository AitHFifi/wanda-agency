import { useState, onMounted } from '#imports'
import en from '../locales/en'
import fr from '../locales/fr'

const dictionaries = { en, fr }

/**
 * Composable for managing application internationalization and locale state.
 * Supports English ('en') and French ('fr') with fallback logic.
 */
export const useLanguage = () => {
  const currentLocale = useState('currentLocale', () => 'en')

  onMounted(() => {
    if (process.client) {
      const savedLocale = localStorage.getItem('wanda_locale')
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) {
        currentLocale.value = savedLocale
      } else {
        const browserLang = navigator.language?.slice(0, 2)
        if (browserLang === 'fr') {
          currentLocale.value = 'fr'
        }
      }
    }
  })

  const setLocale = (locale) => {
    if (locale === 'en' || locale === 'fr') {
      currentLocale.value = locale
      if (process.client) {
        localStorage.setItem('wanda_locale', locale)
      }
    }
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'en' ? 'fr' : 'en')
  }

  const t = (key) => {
    if (!key) return ''
    const keys = key.split('.')
    let result = dictionaries[currentLocale.value] || dictionaries.en

    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        // Fallback to English if missing in current locale
        let fallback = dictionaries.en
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk]
          } else {
            return key
          }
        }
        return fallback
      }
    }
    return result
  }

  return {
    currentLocale,
    setLocale,
    toggleLocale,
    t
  }
}
