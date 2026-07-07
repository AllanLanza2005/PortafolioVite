import { defineConfig } from 'vite';
import purgeCSS from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/PortafolioVite/', 
  plugins: [
    purgeCSS({ 
      content: ['./index.html', './src/**/*.js', './less/**/*.less']
    })
  ],
  build: {
    minify: 'esbuild',
    cssMinify: true
  }
});