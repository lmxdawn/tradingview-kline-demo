import VueI18n from 'vue-i18n'
import Vue from 'vue'

const data = {}
const locale = localStorage.getItem("hb_lang") || 'en'
console.log(locale)
const readDir = ['en', 'zh-Hant']
for (let i = 0; i < readDir.length; i++) {
    data[readDir[i]] = require(`./${readDir[i]}.json`)
}

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale,
    fallbackLocale: locale, // 语言环境中不存在相应massage键时回退到指定语言
    messages: data
})

export default i18n