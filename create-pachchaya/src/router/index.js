import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '@/views/NotFound.vue'
import Products from '@/views/products.vue'
import productdetail from '@/views/productdetail.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'product', component: Products },
  { path: '/about', name: 'About', component: About },
  { path: '/products/:id', name: 'productdetail', component: productdetail, props: true },





  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },

]



const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
