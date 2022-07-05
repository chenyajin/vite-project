/*
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:11:07
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 11:27:46
 * @Description: 
 */
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component:()=> import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/views/todo/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router)
}

export default router