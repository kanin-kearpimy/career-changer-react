import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// , babelDev({ babelConfig: {plugins: ['@babel/plugin-proposal-decorators']}})