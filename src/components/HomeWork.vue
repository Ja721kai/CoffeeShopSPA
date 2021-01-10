<template>
    <v-container id="how we work">
        <v-layout column>
            <v-flex class="display-2 text-xs-center my-5">Our Work</v-flex>
            <v-container align-center>
                <video id="ex_video_2" width="1280px" controls>
                    <source
                        src="@/assets/example_video2.mp4"
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

<style scoped>
#ex_video_2 {
    alignment: center;
}
</style>
