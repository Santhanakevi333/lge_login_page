import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
   extend: {
  animation: {
    marquee: 'marquee 15s linear infinite',
  },
  server:{
    host:true
  }
}
})
