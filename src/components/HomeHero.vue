<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-left">
                FRESH COFFEE
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-left mb-3"
            >
                FAIRTRADE ONLY
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-left">
                Finally find your cozy place around the door with to enjoy your
                coffee.
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background-image: url('../assets/cafe_hero.jpg');
    background-position: bottom;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
