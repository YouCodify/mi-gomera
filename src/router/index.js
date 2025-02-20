import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Inventario',
    component: HomeView
  }, {
    path: '/salida',
    name: 'Salida',
    component: () => import('../views/SalidaView.vue')
  }, {
    path: '/modificar',
    name: 'Modificar',
    component: () => import('../views/ModificarView.vue')
  }, {
    path: '/cart',
    name: 'Carrito',
    component: () => import('../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
