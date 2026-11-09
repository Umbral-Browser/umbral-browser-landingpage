import pages from './pages.json';
import type { Locale } from '../i18n';
export type PageSlug = keyof typeof pages.es;
export const pageSlugs = Object.keys(pages.es) as PageSlug[];
export const pagePath = (lang: Locale, page: PageSlug | '' = '') =>
  `${lang === 'es' ? '/' : `/${lang}/`}${page ? `${page}/` : ''}`;
export const getPage = (lang: Locale, page: PageSlug) => pages[lang][page];
export const ui = {
  es: { docs:'Documentación', install:'Instalación', privacy:'Privacidad', help:'Ayuda', project:'Proyecto', menu:'Menú', home:'Inicio', guide:'CENTRO DE DOCUMENTACIÓN', note:'Compilaciones de desarrollo · Estado documentado: 4 nov 2026', bug:'Reportar un error ↗', idea:'Proponer una mejora ↗', private:'Seguridad: usa un canal privado', overview:'Todo lo que necesitas para empezar.', overviewIntro:'Guías, privacidad y ayuda, en un solo lugar.', read:'Leer guía →', platform:'Estado y descargas', support:'Privacidad y ayuda', community:'Comunidad y proyecto', basics:'Empezar y configurar' },
  en: { docs:'Documentation', install:'Installation', privacy:'Privacy', help:'Help', project:'Project', menu:'Menu', home:'Home', guide:'DOCUMENTATION CENTER', note:'Development builds · Documented status: 4 Nov 2026', bug:'Report a bug ↗', idea:'Suggest an improvement ↗', private:'Security: use a private channel', overview:'Everything you need to get started.', overviewIntro:'Guides, privacy and help, all in one place.', read:'Read guide →', platform:'Status and downloads', support:'Privacy and help', community:'Community and project', basics:'Getting started' },
  ca: { docs:'Documentació', install:'Instal·lació', privacy:'Privacitat', help:'Ajuda', project:'Projecte', menu:'Menú', home:'Inici', guide:'CENTRE DE DOCUMENTACIÓ', note:'Compilacions de desenvolupament · Estat documentat: 4 nov 2026', bug:'Informa d’un error ↗', idea:'Proposa una millora ↗', private:'Seguretat: utilitza un canal privat', overview:'Tot el que necessites per començar.', overviewIntro:'Guies, privacitat i ajuda, en un sol lloc.', read:'Llegeix la guia →', platform:'Estat i descàrregues', support:'Privacitat i ajuda', community:'Comunitat i projecte', basics:'Comença i configura' },
};
export const groups = [
  { label:'basics', pages:['docs','install'] },
  { label:'support', pages:['privacy','help','security'] },
  { label:'community', pages:['project','contribute','conduct','changelog'] },
] as const;
