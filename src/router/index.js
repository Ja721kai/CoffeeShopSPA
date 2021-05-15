import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    } /*,
    {
        path: '/imprint',
        name: 'imprint',
        component: () =>
            import(/* webpackChunkName: "imprint" */ /* '../views/Imprint.vue')
    }*/
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
