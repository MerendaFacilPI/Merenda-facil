import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
   
    {
      path: '/Usuario',
      name: 'Usuario',
      component: () => import('../views/pages/TelaDoUsuario.vue')
    },
   
  ]
})

export default router
