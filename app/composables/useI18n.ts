import fr from '~/locales/fr'
import en from '~/locales/en'

export const useI18n = () => {
  const locale = useState<string>('app_locale', () => 'fr')

  const t = (path: string): string => {
    const dict = locale.value === 'en' ? en : fr
    const keys = path.split('.')
    let current: any = dict
    for (const key of keys) {
      if (current && current[key]) {
        current = current[key]
      } else {
        return path
      }
    }
    return typeof current === 'string' ? current : path
  }

  const setLocale = (lang: string) => {
    if (['fr', 'en'].includes(lang)) {
      locale.value = lang
    }
  }

  return { locale, t, setLocale }
}
