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
            style="display: none"
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
            let scrollTopBtn = document.getElementById('top');
            if (window.scrollY < 50) {
                scrollTopBtn.style.display = 'none';
            } else if (window.scrollY < 600) {
                scrollTopBtn.style.display = 'flex';
                scrollTopBtn.style.opacity = (window.scrollY - 50) / 6 + '%';
            } else {
                scrollTopBtn.style.display = 'flex';
                scrollTopBtn.style.opacity = '100%';
                // calculate button offset from bottom if footer is reached:
                let body = document.body;
                let html = document.documentElement;

                let pageHeight = Math.max(
                    body.scrollHeight,
                    body.offsetHeight,
                    html.clientHeight,
                    html.scrollHeight,
                    html.offsetHeight
                );
                pageHeight = document.documentElement.scrollHeight;
                let pageBottomOffset = pageHeight - window.scrollY - '969'; // mysterios 1090px not in body

                //let footer = document.getElementById('pageFooter');
                let footerHeight = 183; //footer.style.height;
                //console.log(footer);
                //console.log('footerheight: ' + footerHeight);
                //console.log('page offset: ' + pageBottomOffset);
                if (pageBottomOffset < footerHeight) {
                    scrollTopBtn.style.bottom =
                        15 + (footerHeight - pageBottomOffset) + 'px';
                } else {
                    scrollTopBtn.style.bottom = '15px';
                }
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
