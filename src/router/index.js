import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Composable from '../views/Composable.vue'
import e21 from '../views/e21.vue'
import e22 from '../views/e22.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/composable',
      name: 'Composable',
      component: Composable,
    },
    {
      path: '/e21',
      name: 'e21',
      component: e21,
    },
    {
      path: '/e22',
      name: 'e22',
      component: e22,
    },
  ],
})

export default router
