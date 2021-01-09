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
        <v-app-bar fixed dense color="brown darken-4" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            </router-link>
            <router-link to="/menu">
                <v-btn
                    flat
                    class="hidden-sm-and-down"
                    style="margin-left: 10px;"
                    >Menu</v-btn
                >
            </router-link>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Fair-Coffee',
            drawer: false,
            items: [{ title: 'Menu' }]
        };
    }
};
</script>

<style scoped>
.v-application a {
    color: white;
    text-decoration: none;
}
</style>
