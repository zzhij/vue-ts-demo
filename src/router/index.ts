import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
/* import Home from '../views/Home.vue' */
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: 'login',
      icon: 'login',
      affix: true
    }
  }
  /* {
    path: '/module',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Module.vue'),
    redirect: '/module/auth-code',
    children: [{
      path: 'auth-code',
      name: 'AuthCode',
      component: () => import('@/components/verify/verify.vue')
    }]
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
