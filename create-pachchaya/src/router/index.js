import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '@/views/NotFound.vue'
import Product from '@/views/product.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/product', name: 'product', component: Product },
  { path: '/about', name: 'About', component: About },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
