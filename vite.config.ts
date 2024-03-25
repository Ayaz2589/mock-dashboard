import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000, // Match the exposed port
    strictPort: true, // Make Vite error out if the port is already in use
    // other configurations...
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
