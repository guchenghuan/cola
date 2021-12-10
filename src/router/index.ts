import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Quality from '@/views/Quality.vue'
import Vuex from '@/views/Vuex.vue'
import Test from '@/views/Test.vue'
import pns from '@/views/pns.vue'
import getpro from '@/views/getpro.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Quality',
    name: 'Quality',
    component: Quality
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue') // 懒加载 Axios 组件
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/pns',
    name: 'pns',
    component: pns
  },
  {
    path: '/proback',
    name: 'proback',
    component: getpro
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
