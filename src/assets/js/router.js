import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../../components/HomePage.vue'
import Blog1 from '../../components/Blog1.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      props: true
    },
    {
      path: '/blog1',
      name: 'blog1',
      component: Blog1,
    }
  ]
})

export default router