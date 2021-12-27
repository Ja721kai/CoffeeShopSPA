<template>
    <v-footer dark padless id="pageFooter">
        <v-card
            flat
            tile
            width="100%"
            class="indigo darken-4 white--text text-center"
        >
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon.id"
                    class="mx-4 white--text"
                    :href="icon.url"
                    icon
                >
                    <v-icon size="24px">
                        {{ icon.id }}
                    </v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Do you want to automatically generate your own multilingual
                content?
                <a
                    href="https://www.xanevo.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <b>Contact Us</b>
                </a>
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
                        <b>Xanevo GmbH</b></a
                    ></strong
                >
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'HomeFooter',
    data: () => ({
        icons: [
            {
                id: 'mdi-facebook',
                url: 'https://www.facebook.com/Xanevo-GmbH-105194401768701'
            },
            { id: 'mdi-twitter', url: 'https://twitter.com/Xanevo1' },
            {
                id: 'mdi-linkedin',
                url: 'https://www.linkedin.com/company/77195980/'
            },
            { id: 'mdi-instagram', url: 'https://www.instagram.com/xanevo_/' },
            {
                id: 'mdi-youtube',
                url:
                    'https://www.youtube.com/channel/UC6vQNuxLKEpHgQg2Gc0_uTw/featured'
            }
        ]
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
    color: white;
}
</style>
