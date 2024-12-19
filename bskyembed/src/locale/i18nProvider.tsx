import {i18n} from '@lingui/core'
import {ComponentChildren, Fragment} from 'preact'
import {useEffect, useState} from 'preact/hooks'

import {appLanguage, dynamicActivate} from './i18n'

export default function I18nProvider({children}: {children: ComponentChildren}) {
  const [locale, setLocale] = useState(i18n.locale)

  useEffect(() => {
    const updateContext = () => {
      setLocale(i18n.locale)
      document.documentElement.lang = i18n.locale
    }
    return i18n.on('change', updateContext)
  })

  void dynamicActivate(appLanguage)

  if (!locale) {
    return null
  }

  return (
    <>{children}</>
  )
}
