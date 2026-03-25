import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'static-pages',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          // Handle /privacy and /support with or without query parameters
          if (req.url?.startsWith('/privacy')) {
            req.url = req.url.replace('/privacy', '/privacy/index.html');
          } else if (req.url?.startsWith('/support')) {
            req.url = req.url.replace('/support', '/support/index.html');
          } else if (req.url?.startsWith('/delete-account')) {
            req.url = req.url.replace('/delete-account', '/delete-account/index.html');
          }
          next();
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
