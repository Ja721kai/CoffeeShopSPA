<template>
    <v-container grid-list-lg id="drinks">
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Drinks</v-flex
            >
        </v-layout>
        <!--<v-layout row wrap>
            <v-flex>
                <v-flex xs12 sm12 md4 :key="index">
                    <v-card>
                        <v-img src="../assets/cafe1_vert.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">
                                            TEST</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Example 1</h3>
                                <v-flex>
                                    Hello
                                </v-flex>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-flex>
        </v-layout>-->
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img :src="drinks[0].img_url" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">{{
                                        drinks[0].title
                                    }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Example 1</h3>
                            <div>
                                {{ drinks[0].text }}
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img :src="drinks[1].img_url" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">{{
                                        drinks[1].title
                                    }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Example 2</h3>
                            <div>
                                {{ drinks[1].text }}
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img :src="drinks[2].img_url" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">{{
                                        drinks[2].title
                                    }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Example 3</h3>
                            <div>
                                {{ drinks[2].text }}
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import image1 from '../assets/cafe1_vert.jpg';
import image2 from '../assets/cafe5_vert.jpg';
import image3 from '../assets/cafe2_vert.jpg';
export default {
    name: 'HomePlans',
    data() {
        return {
            drinks: [
                {
                    title: 'EXAMPLE 1',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur\n' +
                        '                                adipiscing elit. Nullam mauris felis, varius\n' +
                        '                                rutrum massa a, dignissim ornare dui. Cras eget\n' +
                        '                                velit eu dui tristique lobortis sit amet vel\n' +
                        '                                tellus.',
                    img_url: image1
                },
                {
                    title: 'EXAMPLE 2',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur\n' +
                        '                                adipiscing elit. Nullam mauris felis, varius\n' +
                        '                                rutrum massa a, dignissim ornare dui. Cras eget\n' +
                        '                                velit eu dui tristique lobortis sit amet vel\n' +
                        '                                tellus.',
                    img_url: image2
                },
                {
                    title: 'EXAMPLE 3',
                    text:
                        'Lorem ipsum dolor sit amet, consectetur\n' +
                        '                                adipiscing elit. Nullam mauris felis, varius\n' +
                        '                                rutrum massa a, dignissim ornare dui. Cras eget\n' +
                        '                                velit eu dui tristique lobortis sit amet vel\n' +
                        '                                tellus.',
                    img_url: image3
                }
            ]
        };
    }
};
</script>

<style scoped></style>
