import { createContext, useContext, useEffect, useState } from 'react'
import { dan } from '../Constants/dan'
import { eng } from '../Constants/eng'

const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language'))

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const changeLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'danish' ? 'english' : 'danish'))
  }

  const TEXT = language === 'danish' ? dan : eng

  const languageButtonText = language === 'danish' ? 'English' : 'Dansk'

  return (
    <LanguageContext.Provider
      value={{ TEXT, changeLanguage, languageButtonText }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
