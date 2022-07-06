import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router';
import { setupStore } from '@/store'
import * as ElementPlusIconsVue from '~/element-plus/icons-vue'

async function bootstrap() {
  const app = createApp(App)

  // 全局挂载element-plus图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }  

  // 挂载状态管理
  setupStore(app)

  // 挂载路由
  await setupRouter(app)

   // 路由准备就绪后挂载APP实例
   await router.isReady()

   app.mount('#app', true)

}

void bootstrap()
