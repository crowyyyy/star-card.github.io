import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/picture/PictureTest.vue'),
  },
  {
    path: '/diy',
    name: 'Diy',
    component: () => import('./views/diy/DiyPage.vue'),
  },
  {
    path: '/preview',
    name: 'Preview',
    component: () => import('./views/preview/PreviewPage.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('./views/result/ResultPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 