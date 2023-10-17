import { createRouter, createWebHistory } from 'vue-router'
import Roadmap from './components/pages/roadmap/Roadmap.vue'
import Home from './components/pages/home/Home.vue'
import About from './components/pages/About.vue'
import Article from "@/components/pages/article/Article.vue";

async function checkIfArticleDateIsOk(id) {
    const filePath = `/summaries/summary${id}.json`;
    
    const jsonData = await fetch(filePath)
        .then(response => {
            if (response.status === 404) {
                return false;
            }
            return response.json();
        });

    if (!jsonData) {
        return false;
    }
    
    // format the date 01-01-2000 to Date.now() format
    const date = new Date(jsonData.date.split('-').reverse().join('-')).getTime();
    return date <= Date.now();
}

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
        // check if the route is the id is under 1000 and if the date is not in the future send to 404
        beforeEnter: async (to, from, next) => {
            const id = to.params.id;
            if (!await checkIfArticleDateIsOk(id)) {
                next('/not-found');
                return;
            }
            next();
            return;
        },
        meta: {
            color: 'primary-darken-1',
            scrollBehavior: 'elevate'
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