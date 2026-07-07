
import { defineConfig } from 'vite';
import { cssPurge } from 'vite-plugin-css-purgecss';

export default defineConfig({
  base: '/PortafolioVite/', 
  plugins: [
    cssPurge({
      content: ['./index.html', './src/**/*.js', './less/**/*.less']
    })
  ],
  build: {
    minify: 'esbuild',
    cssMinify: true
  }
});