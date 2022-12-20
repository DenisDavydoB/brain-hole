import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const PORT_DEFAULT = 3000

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: getPort(),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [react()],
})

function getPort(): number {
  const port = process.env.PORT
  const parsed = port != null ? parseInt(port, 10) : PORT_DEFAULT

  return parsed
}
