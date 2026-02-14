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
          if (req.url === '/privacy' || req.url === '/support') {
            req.url = req.url + '/index.html';
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
