import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// postcss
import postcssMixins from 'postcss-mixins'
import postcssRem from 'postcss-rem'
// rollup-delete
import Delete from 'rollup-plugin-delete'
// vite
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            outputDir: "dist",
            staticImport: true,
            insertTypesEntry: true
        }),
        vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'sheep-design-vue',
            fileName: format => `sheep-design-vue.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            },
            plugins: [
                Delete({
                    targets: ['dist/*.{ico,txt}'],
                    hook: 'generateBundle'
                })
            ]
        }
    },
    css: {
        postcss: {
            plugins: [postcssMixins, postcssRem]
        }
    },
    resolve: {
        alias: {
            '@': '/src/',
        }
    }
})
