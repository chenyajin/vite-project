import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    vue(),
    DefineOptions(), 
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      dirs: ['./src'],
      imports: ['vue'], // 自动导入vue的相关函数
      dts: 'src/auto-import.d.ts', // 自动生成 'auto-import.d.ts'全局声明
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()], // ElementPlus按需加载：无需手动import，自动识别并注册
    }),
  ]
})
