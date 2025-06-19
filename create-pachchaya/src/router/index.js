import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Promotion from '../views/Promotion.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/promotion', name: 'Promotion', component: Promotion },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/about', name: 'About', component: About },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
