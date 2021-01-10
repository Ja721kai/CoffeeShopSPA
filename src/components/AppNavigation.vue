<template>
    <span>
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
        <v-app-bar fixed dense color="brown darken-4" dark id="navigation">
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <router-link to="/">
                <v-toolbar-title @click="scrollToTop()">{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <div class="vl"></div>
            <v-container id="nav-container" v-if="['home'].includes($route.name)">
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
export default {
    name: 'AppNavigation',
    methods: {
        scrollToComponent(componentId) {
            let component = document.getElementById(componentId.toLowerCase());
            let nav = document.getElementById('navigation');
            window.scrollTo({
                top: component.offsetTop - parseInt(nav.style.height),
                behavior: 'smooth'
            });
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    },
    data() {
        return {
            appTitle: 'Fair-Coffee',
            drawer: false,
            items: [
                { title: 'How We Work' },
                { title: 'History' },
                { title: 'Drinks' },
                { title: '...' }
            ]
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
#nav-container {
    margin: 5px;
}
</style>
