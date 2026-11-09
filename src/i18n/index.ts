import translations from './translations.json';
export type Locale = keyof typeof translations;
export const languages: {code: Locale; label: string}[] = [
  {code: 'es', label: 'Español'},
  {code: 'en', label: 'English'},
  {code: 'ca', label: 'Català'},
];
export const languagePath = (locale: Locale) => locale === 'es' ? '/' : `/${locale}/`;
export const getCopy = (locale: Locale) => translations[locale];
