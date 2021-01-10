<template>
    <v-container grid-list-lg id="drinks">
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Drinks</v-flex
            >
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        height="500px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text"
                                        >CAPPUCCINO</span
                                    >
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Cappuccino</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam mauris felis, varius
                                rutrum massa a, dignissim ornare dui. Cras eget
                                velit eu dui tristique lobortis sit amet vel
                                tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1580419423277-f5bd81b32a05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        height="500px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline black--text"
                                        >MATCHA</span
                                    >
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Matcha</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam mauris felis, varius
                                rutrum massa a, dignissim ornare dui. Cras eget
                                velit eu dui tristique lobortis sit amet vel
                                tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img
                        src="https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        height="500px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text"
                                        >ESPRESSO</span
                                    >
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Esspresso</h3>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam mauris felis, varius
                                rutrum massa a, dignissim ornare dui. Cras eget
                                velit eu dui tristique lobortis sit amet vel
                                tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans'
};
</script>

<style scoped></style>
