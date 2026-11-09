import { defineConfig } from 'astro/config';

const toolbarEntrypoint = 'astro/runtime/client/dev-toolbar/entrypoint.js';

export default defineConfig({
  site: process.env.SITE_URL || 'https://umbral-browser.org',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: {
    optimizeDeps: {
      exclude: [toolbarEntrypoint, 'astro:toolbar:internal'],
    },
    plugins: [{
      name: 'umbral-skip-unused-dev-toolbar',
      apply: 'serve',
      configResolved(config) {
        for (const options of [
          config.optimizeDeps,
          config.environments?.client?.optimizeDeps,
        ]) {
          if (options?.include) {
            options.include = options.include.filter(id => id !== toolbarEntrypoint);
          }
        }
      },
    }],
  },
});
