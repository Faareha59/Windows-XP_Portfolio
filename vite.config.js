import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Windows-XP_Portfolio/',
  build: {
    outDir: 'dist'
  }
});