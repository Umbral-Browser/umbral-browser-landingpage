# Umbral — landing en Astro

Landing estática de presentación de Umbral Browser, con español, inglés y catalán. Usa capturas reales de una compilación de desarrollo en Linux; no recreaciones de la interfaz.

## Ejecutar

Necesitas una versión de Node compatible con la versión de Astro fijada en `package-lock.json` (la compilación de entrega se probó con Node 24).

```bash
npm ci
npm run dev
```

Abre la dirección que imprima Astro. Para compilar y revisar el resultado:

```bash
npm run build
npm run preview
```

El sitio generado está en `dist/` y puede alojarse en un servidor estático. No necesita backend, cuenta, base de datos ni clave API. El selector de idioma y las preguntas frecuentes funcionan sin JavaScript del cliente.

## Estructura

- `src/components/Landing.astro`: contenido y secciones.
- `src/components/Header.astro`: navegación.
- `src/components/LanguagePicker.astro`: selector accesible mediante enlaces nativos.
- `src/components/Screenshot.astro`: imágenes reales y pies de foto.
- `src/layouts/BaseLayout.astro`: metadatos, canonical y enlaces de idiomas.
- `src/i18n/translations.json`: todo el texto de los tres idiomas.
- `src/styles/global.css`: estilos responsive, colores neutros y movimiento reducido.
- `public/`: logo y capturas.

Rutas: `/` (español), `/en/` (inglés), `/ca/` (catalán). Cada idioma se genera como HTML independiente para que sea indexable y no dependa de JavaScript.

## Dominio

La configuración usa `https://umbral-browser.org` como URL de ejemplo. Esto NO significa que el dominio esté registrado o disponible. Cámbialo en `astro.config.mjs` o compila así:

```bash
SITE_URL=https://tu-dominio.example npm run build
```

Los recursos y enlaces internos suponen alojamiento en la raíz del dominio, no en un subdirectorio de GitHub Pages.

## Analítica y descargas

Para activar Umami autoalojado, configura `PUBLIC_UMAMI_WEBSITE_ID` con el ID del sitio en un archivo `.env` local o como variable de entorno del proveedor de alojamiento antes de ejecutar `npm run build`. Por ejemplo: `PUBLIC_UMAMI_WEBSITE_ID=tu-id npm run build`. Sin esa variable, no se incluye el tracker. Solo se activa en `umbral-browser.org` y `www.umbral-browser.org`. Los clics de descarga registran el evento `download` y la propiedad `platform`.

Las URLs de ambos botones están en `src/content/downloads.ts`. Por ahora apuntan a GitHub Releases; sustituye `linuxFlatpak` y `windowsExe` por las URLs directas de los assets cuando se publiquen.

En Cloudflare Pages, Netlify u otro alojamiento estático: comando `npm run build`, directorio de salida `dist`. Configura `SITE_URL` con el dominio definitivo y recompila antes de publicar.

## Imágenes y contenido

`umbral-home-real.png` muestra la homepage con un perfil temporal. `umbral-ai-real.png` muestra el panel antes de configurar el servidor. Se conservan los textos de la interfaz en inglés tal como se capturaron; cambiar el idioma de la web no traduce los píxeles de las capturas.

Puedes sustituirlas por capturas más recientes con los mismos nombres. Ajusta también las dimensiones y pies de foto en `Landing.astro` si corresponde.

Se presenta Linux con Flatpak como plataforma principal y Windows como ZIP experimental con actualización manual. No se anuncian descargas estables, anonimato, resultados de rendimiento ni estadísticas de uBO que el producto no ofrece.

## Créditos

Umbral es un proyecto de Martin. El navegador deriva de Zen y Firefox y redistribuye uBlock Origin original. Los enlaces al repositorio y los créditos del navegador permanecen visibles. La licencia y atribución de cada recurso original se mantienen bajo sus términos respectivos; esta entrega no modifica las licencias del navegador.


## Centro de documentación y proyecto

La web ahora genera **30 páginas estáticas**: la portada y nueve páginas de contenido en español, inglés y catalán.

| Sección | Ruta en español | Contenido |
| --- | --- | --- |
| Documentación | `/docs/` | Inicio, SearXNG, IA, contraseñas y contenedores |
| Instalación | `/install/` | Paquetes disponibles, perfil, actualización y desinstalación |
| Privacidad | `/privacy/` | Datos, conexiones, ETP, IA y límites conocidos |
| Ayuda | `/help/` | Problemas conocidos y enlaces de reporte en GitHub |
| Seguridad | `/security/` | Reportes privados y estado de mantenimiento |
| Código de conducta | `/conduct/` | Participación, moderación y contacto pendiente |
| Contribuciones | `/contribute/` | Fuentes persistentes, compilación y validación |
| Proyecto | `/project/` | Enfoque, objetivos y créditos |
| Cambios | `/changelog/` | Estado documentado, sin inventar releases |

Las rutas inglesas y catalanas llevan `/en/` y `/ca/` delante. Al cambiar idioma se conserva la sección actual. El contenido de las guías se edita en `src/content/pages.json` y la navegación en `src/content/navigation.ts`.

Para construir y comprobar páginas, traducciones, enlaces internos, anchors, metadatos y recursos:

```bash
npm run check
```

Las comprobaciones son estáticas; no sustituyen una revisión visual, una prueba con lector de pantalla ni la validación de ajustes de GitHub.

### Reportes y contactos

Los botones de ayuda preparan un issue con texto inicial en GitHub. No son un formulario alojado en esta web, no envían nada automáticamente y no sirven para divulgar vulnerabilidades. No se han configurado ni comprobado los ajustes privados del repositorio; la página de seguridad explica la alternativa sin revelar detalles. Falta definir un contacto privado real de moderación antes de una apertura comunitaria amplia.

### Archivos para llevar al repositorio del navegador

`repository-kit/` contiene borradores de SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, plantillas de issues/PR y una lista de preparación de releases. Lee su README y revisa cada archivo antes de copiarlo. No se aplican automáticamente y no sustituyen los avisos de licencia originales del navegador.

No se ha modificado el repositorio del navegador, cambiado su configuración de GitHub, creado issues ni publicado una release al preparar esta web.
