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
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router