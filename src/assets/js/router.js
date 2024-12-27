import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../../components/HomePage.vue'
import Blog1 from '../../components/Blog1.vue'
import Blog2 from '../../components/Blog2.vue'
import Blog3 from '../../components/Blog3.vue'
import Portfolio from '../../components/Portfolio.vue'

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
      path: '/experienceblog',
      name: 'blog1',
      component: Blog1,
    },
    {
      path: '/futureblog',
      name: 'blog2',
      component: Blog2,
    },
    {
      path: '/freetimeblog',
      name: 'blog3',
      component: Blog3,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    }
  ]
})

export default router