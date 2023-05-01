import { createRouter, createWebHashHistory } from 'vue-router'
// import vCatalog from '../components/v-catalog.vue'
const vCatalog = () => import('../components/v-catalog.vue')
// import vCart from '../components/v-cart.vue'
const vCart = () => import('../components/v-cart.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: vCart,
    props: true
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: vCatalog,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
