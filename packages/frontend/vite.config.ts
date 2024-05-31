import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  /**
   * TODO: /!\ FRONTEND_PORT est undefined
   */
  const { FRONTEND_PORT } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: +FRONTEND_PORT || 4444,
    },
    build: {
      sourcemap: true,
    },
  };
});
