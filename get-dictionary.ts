import 'server-only'

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    tr: () => import('./dictionaries/tr.json').then((module) => module.default),
    es: () => import('./dictionaries/es.json').then((module) => module.default),
    zh: () => import('./dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    // @ts-ignore
    return dictionaries[locale]?.() ?? dictionaries.en()
}
