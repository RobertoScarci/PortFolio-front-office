

import HomePage from '../../components/HomePage.vue';
import Blog1 from '../../components/Blog1.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/blog1',
            name: 'Blog1',
            component: Blog1
        }
       
    ]
});

export { router }