import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // O nome precisa acompanhar o nome do repositório no GitHub Pages.
  base: '/teste.sistema/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
});
