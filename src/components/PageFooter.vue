<template>
    <v-footer dark padless id="pageFooter">
        <v-card flat tile class="brown darken-2 white--text text-center">
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
                amet. Mauris cursus commodo interdum. Praesent ut risus eget
                metus luctus accumsan id ultrices nunc. Sed at orci sed massa
                consectetur dignissim a sit amet dui. Duis commodo vitae velit
                et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
                augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
                Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} —
                <strong
                    >A Showcase Website of
                    <a
                        href="https://www.xanevo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Xanevo GmbH</a
                    ></strong
                >
                <!---
                <router-link to="/imprint">
                    <b @click="scrollToTop()">Imprint</b>
                </router-link>-->
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'HomeFooter',
    data: () => ({
        icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
    }),
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0
            });
        }
    }
};
</script>

<style scoped>
.v-application a {
    text-decoration: none;
}
</style>
