import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),cssInjectedByJsPlugin()],
  build: {
    outDir: './dist',// << move back to plain 'dist'
    emptyOutDir: true,
    lib: {
      entry: './src/index.ts',
      name: 'JordiumGanttVue3',
      fileName: format => `jordium-gantt-vue3.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
		exports:'named', // recommended to avoid default+named warning
		manualChunks: undefined, // disables code splitting
		inlineDynamicImports: true
      },
    },
  },
})
