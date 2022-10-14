import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue' // https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: 'dev.bakkersonline.be',
        open: true,
        port: 8888,
    },
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
})
