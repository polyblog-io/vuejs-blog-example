import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

const routes = [
    {path: '/', name: 'home', redirect: '/en', component: HomePage},
    {path: '/:locale', component: HomePage},
    {path: '/:locale/:slug', component: ArticlePage},
]


const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')