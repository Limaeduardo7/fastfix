import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
        cssCodeSplit: true,
        minify: 'terser',
        terserOptions: {
            compress: { drop_console: true },
        },
    },
})
