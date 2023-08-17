import i18n from "../locale";

const Key = 'hb_lang'

export function getLanguage() {
    const lang = localStorage.getItem(Key)
    return lang === 'zh-Hant' ? 'zh-Hant' : 'en'
}

export function setLanguage(lang) {
    console.log(lang)
    i18n.locale = lang
    return localStorage.setItem(Key, lang)
}

export function removeLanguage() {
    return localStorage.removeItem(Key)
}