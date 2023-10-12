import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Waymon',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: ()=> require('../views/Home.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
