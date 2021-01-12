<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-main transition="slide-x-transition">
            <router-view></router-view>
        </v-main>
        <v-btn
            id="top"
            outlined
            @click="scrollToTop()"
            v-if="['home'].includes($route.name)"
        >
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
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            console.log(window.scrollY);
            if (window.scrollY > 400) {
                let scrollTopBtn = document.getElementById('top');
                scrollTopBtn.style.display = 'none';
            } else {
                let scrollTopBtn = document.getElementById('top');
                scrollTopBtn.style.display = 'flex';
            }
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
