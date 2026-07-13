import { defineConfig } from 'vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    root: path.resolve(__dirname),
    resolve: {
        alias: {
        }
    },
    optimizeDeps: {
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Ontario-China Metrics Converter',
                short_name: 'ONMetrics',
                description: '转换常见度量衡单位',
                start_url: 'index.html',
                id: 'com.hixland.onmetrics',
                display: 'standalone',
                background_color: "#1e40af",
                theme_color: "#1e40af",
                lang: 'zh',
                icons: [
                    {
                        sizes: '192x192',
                        type: 'image/png',
                        src: '/icon_192px.png'
                    },
                    {
                        sizes: '512x512',
                        type: 'image/png',
                        src: '/icon_512px.png'
                    },
                    {
                        sizes: 'any',
                        type: 'image/svg+xml',
                        src: '/icon.svg'
                    }
                ],
            },
            workbox: {
                globPatterns: ['**/*.{js,css,png,svg,html,ico,json}'],
                runtimeCaching: [],
                cleanupOutdatedCaches: true,
                skipWaiting: true,
                clientsClaim: true,
            },
            devOptions: {
                enabled: true,
                type: 'module',
            },
        })
    ],
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rolldownOptions: {
            input: [
                'index.html'
            ],
        },
        sourcemap: true,
    },
})