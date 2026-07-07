import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/PortafolioVite/', 
  plugins: [
    purgeCss({
      content: ['./index.html', './src/**/*.js', './less/**/*.less']
    })
  ],
  build: {
    minify: 'esbuild',
    cssMinify: true
  }
});