import { Languages } from "features/language"
import { createContext }  from "react"

export const initialState = {
  language: 'ENGLISH',
  setLanguage: (language: Languages) => {}
}

export const LanguageContext = createContext(initialState)