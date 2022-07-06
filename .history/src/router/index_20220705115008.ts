/*
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:11:07
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 11:35:08
 * @Description: 
 */
import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component:()=> import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/views/todo/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter
});

export function setupRouter(app: App) {
  app.use(router)
}

export default router