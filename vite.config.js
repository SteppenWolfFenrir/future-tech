import {defineConfig} from 'vite';
import path from 'path';
import svgo from 'vite-plugin-svgo';
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  root: './src',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@sass': path.resolve(__dirname, 'src/sass'),
      // '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      // '@images': path.resolve(__dirname, 'src/assets/images'),
      // '@svg': path.resolve(__dirname, 'src/assets/svg'),
      // '@js': path.resolve(__dirname, 'src/js'),
      // '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: ``,
      },
    },
  },
  plugins: [
    svgo(),
    eslintPlugin(),
  ],
});