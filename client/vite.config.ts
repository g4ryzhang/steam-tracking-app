import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // with options: http://localhost:3000/api/bar-> http://localhost:3001/bar
      '/api': {
        target: 'http://localhost:3001', // node backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // configure: (proxy, options) => {
        //   // proxy will be an instance of 'http-proxy'
        // },
      },

      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true,
      },
    },
  },
})
