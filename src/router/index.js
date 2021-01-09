import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/imprint',
        name: 'Imprint',
        component: () =>
            import(/* webpackChunkName: "imprint" */ '../views/Imprint.vue')
    },
    {
        path: '/menu',
        name: 'Menü',
        component: () =>
            import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
