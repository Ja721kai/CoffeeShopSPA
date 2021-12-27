<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-left">
                SHOWCASE WEBSITE
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-left mb-3"
            >
                by Xanevo
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-left">
                We automate the writing of high-quality texts, product
                descriptions <br />
                and reports using AI-powered language generation.
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
    background-image: url('../assets/compressed/cafe_hero.jpg');
    background-position: bottom;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
