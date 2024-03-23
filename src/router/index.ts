import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Usuario from '../views/pages/TelaDoUsuario.vue' 

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
      component: Usuario
    },
   
  ]
})

export default router
