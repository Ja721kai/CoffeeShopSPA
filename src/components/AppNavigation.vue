<template>
    <span>
        <!--  Mobile view -->
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <!--  Desktop view -->
        <!-- <v-app-bar fixed dense color="brown darken-4" dark id="navigation"> OLD NAV BAR -->
        <v-app-bar flat fixed id="navigation">
            <!-- add prominent for thicker appbar -->
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <router-link to="/">
                <v-toolbar-title
                    style="color: white"
                    @click="scrollToComponent('top')"
                    >{{ appTitle }}</v-toolbar-title
                >
            </router-link>
            <div class="vl"></div>
            <v-container
                id="nav-container"
                v-if="['home'].includes($route.name)"
            >
                <v-row no-gutters>
                    <v-col
                        md="auto"
                        v-for="(item, index) in items"
                        :key="index"
                        @click="scrollToComponent(item.title)"
                        style="margin-left: 40px"
                    >
                        <v-toolbar-title> {{ item.title }}</v-toolbar-title>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </span>
</template>

<script>
import navBackgroundUrl from '../assets/navbar_background.png';
export default {
    name: 'AppNavigation',
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const homeHeroHeight = document.getElementsByClassName(
                'home-hero'
            )[0].offsetHeight;
            const navBarHeight = document.getElementById('navigation')
                .offsetHeight;

            if (homeHeroHeight - (navBarHeight + window.scrollY) < 0) {
                this.adjustNavbar('image');
            } else {
                this.adjustNavbar('transparent');
            }
        },
        async scrollToComponent(componentId) {
            const nav = document.getElementById('navigation');
            if (componentId === 'top') {
                await this.scrollTo(0);
                this.adjustNavbar('transparent');
            } else {
                const component = document.getElementById(
                    componentId.toLowerCase()
                );
                await this.scrollTo(
                    component.offsetTop - parseInt(nav.style.height)
                );
                this.adjustNavbar('image');
            }
        },
        scrollTo(topCoordinate) {
            return new Promise(resolve => {
                window.scrollTo({
                    top: topCoordinate,
                    behavior: 'smooth'
                });
                resolve();
            });
        },
        adjustNavbar(background) {
            const nav = document.getElementById('navigation');
            if (background === 'transparent') {
                nav.style.backgroundImage = 'none';
            } else if (background === 'image') {
                nav.style.backgroundImage =
                    'url(' + this.navBackgroundUrl + ')';
                // "url('../assets/navbar_background.png')"
            }
        }
    },
    data() {
        return {
            appTitle: 'Fair-Coffee',
            drawer: false,
            items: [
                { title: 'How We Work' },
                { title: 'History' },
                { title: 'Drinks' }
                // { title: '...' }  -> to add extra elements
            ],
            navBackgroundUrl
        };
    }
};
</script>

<style scoped>
.v-application a {
    color: white;
    text-decoration: none;
}
.vl {
    border-left: 6px solid white;
    height: 100%;
    margin-left: 40px;
}
#navigation {
    background-color: transparent;
    color: white;
}
#nav-container {
    margin: 5px;
}
</style>
