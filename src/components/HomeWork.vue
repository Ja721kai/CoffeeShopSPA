<template>
    <v-container id="how we work">
        <v-layout column>
            <v-flex class="display-2 text-xs-center my-5">Our Work</v-flex>
            <v-container>
                <video id="ex_video" width="80%" controls>
                    <source
                        src="@/assets/JC_Advertising.mp4"
                        type="video/mp4"
                    />
                </video>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeWork'
};
</script>

<style scoped></style>
