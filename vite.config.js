import { resolve } from 'path';
import { defineConfig } from 'vite';

const VALID_PAGES = new Set([
  '/',
  '/index.html',
  '/bath-body',
  '/bath-body.html',
  '/skincare',
  '/skincare.html',
  '/makeup',
  '/makeup.html',
  '/fragrance',
  '/fragrance.html',
  '/gifting',
  '/gifting.html',
  '/about',
  '/about.html',
  '/contact',
  '/contact.html',
  '/privacy',
  '/privacy.html',
  '/terms',
  '/terms.html',
  '/disclaimer',
  '/disclaimer.html'
]);

function custom404Plugin() {
  return {
    name: 'custom-404-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method !== 'GET') return next();

        const rawUrl = req.url || '';
        const urlPath = rawUrl.split('?')[0].replace(/\/+$/, '') || '/';

        // Ignore internal Vite requests, HMR, source files, and static assets
        if (
          urlPath.startsWith('/@') ||
          urlPath.startsWith('/src/') ||
          urlPath.startsWith('/images/') ||
          urlPath.startsWith('/node_modules/') ||
          urlPath.startsWith('/dist/') ||
          urlPath.startsWith('/favicon') ||
          /\.(js|css|json|png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf|eot|map)$/i.test(urlPath)
        ) {
          return next();
        }

        // Allow known valid routes (with or without .html)
        if (VALID_PAGES.has(urlPath) || VALID_PAGES.has(urlPath + '.html')) {
          return next();
        }

        // Unknown route (e.g. /hjnjk, /jbjkkb) -> serve 404.html with true 404 status code
        req.url = '/404.html';
        res.statusCode = 404;
        const origWriteHead = res.writeHead;
        res.writeHead = function(code, ...args) {
          return origWriteHead.call(this, 404, ...args);
        };
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [custom404Plugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        skincare: resolve(import.meta.dirname, 'skincare.html'),
        bathBody: resolve(import.meta.dirname, 'bath-body.html'),
        fragrance: resolve(import.meta.dirname, 'fragrance.html'),
        makeup: resolve(import.meta.dirname, 'makeup.html'),
        gifting: resolve(import.meta.dirname, 'gifting.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
        disclaimer: resolve(import.meta.dirname, 'disclaimer.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        notFound: resolve(import.meta.dirname, '404.html')
      }
    }
  }
});
