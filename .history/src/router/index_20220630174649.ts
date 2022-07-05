/*
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:11:07
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-06-30 17:46:49
 * @Description: 
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
    routes: routes
})

export default router