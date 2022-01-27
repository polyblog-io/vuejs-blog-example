import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

const routes = [
    {path: '/en', component: HomePage},
    {path: '/en/slug', component: ArticlePage},
]


const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')
