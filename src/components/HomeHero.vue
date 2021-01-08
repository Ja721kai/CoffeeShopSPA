<template>
    <v-container
        fluid
        fill-height
        class="home-hero"
        style="max-height: 100vh ;"
    >
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">
                FRESH DRINKS
            </div>
            <div
                class="display-4 font-weight-black black--text text-xs-center mb-3"
            >
                FAIRTRADE ONLY
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center">
                Finally find your cozy place around the door with fairtrade
                products.
            </div>
            <v-btn fab class="mt-5 brown darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
    data() {
        return {
            viewHeight: '100vh'
        };
    }
};
</script>

<style scoped>
.home-hero {
    background: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
