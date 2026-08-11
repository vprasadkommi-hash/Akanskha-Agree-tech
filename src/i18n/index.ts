import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { en } from "./en"
import { te } from "./te"

export const resources = {
  en: { translation: en },
  te: { translation: te },
}

let initialLang = "en"
if (typeof window !== "undefined") {
  try {
    const saved = localStorage.getItem("app_lang")
    if (saved === "en" || saved === "te") {
      initialLang = saved
    }
  } catch {
    // ignore
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try {
      localStorage.setItem("app_lang", lng)
    } catch {
      // ignore
    }
  })
}

export default i18n
