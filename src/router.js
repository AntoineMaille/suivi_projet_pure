import { createRouter, createWebHistory } from 'vue-router'
import Roadmap from './components/pages/roadmap/Roadmap.vue'
import Home from './components/pages/home/Home.vue'
import About from './components/pages/About.vue'
import Article from "@/components/pages/article/Article.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            color: 'primary-darken-1',
            scrollBehavior: 'elevate'
        }
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article,
        meta: {
            color: 'white',
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/roadmap',
        name: 'Roadmap',
        component: Roadmap,
        meta: {
            color: 'primary-darken-1',
            scrollBehavior: 'elevate'
        }
    },
    // autres routes
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('./components/pages/NotFound.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router