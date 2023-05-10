import { useState } from "react"
import { LanguageContext, initialState } from "./LanguageContext"

export const LanguageProvider = ({children}: JSX.ElementChildrenAttribute) => {
  const [language, setLanguage] = useState(initialState.language)
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}