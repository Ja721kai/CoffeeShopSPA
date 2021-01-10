<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-main transition="slide-x-transition">
            <router-view></router-view>
        </v-main>
        <v-btn id="top" outlined @click="scrollToTop()" v-if="['home'].includes($route.name)">
            back to Top
        </v-btn>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style>
#top {
    background-color: white;
    color: black;
    position: fixed;
    bottom: 15px;
    right: 40px;
    width: 180px;
}
</style>
