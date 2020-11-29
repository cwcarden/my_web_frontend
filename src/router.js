import Vue from 'vue';
import Router from 'vue-router';


import About from './views/About.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/projects',
            component: Projects
        },
    ]
})