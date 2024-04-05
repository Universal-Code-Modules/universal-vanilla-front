import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
 
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    }
  }
  

})
