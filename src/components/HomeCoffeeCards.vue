<template>
    <v-container grid-list-lg id="drinks">
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Drinks</v-flex
            >
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4 v-for="(drink, index) in drinks" :key="index">
                <v-card>
                    <v-img :src="drink.img_url" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">{{
                                        drink.title
                                    }}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ drink.title }}</h3>
                            <p></p>
                            <div
                                v-for="(paragraph,
                                textIndex) in drink.paragraphs"
                                :key="textIndex"
                            >
                                <p>{{ paragraph.text }}</p>
                                <p></p>
                            </div>
                            <!--
                            This can be used to insert empty lines into hero cards: (just empty paragraph)
                            <p></p>
                            <div>
                              {{ drink.text }}
                            </div>
                            -->
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
import textFile1 from 'raw-loader!../ax_results/coffee_result1.txt';
import textFile2 from 'raw-loader!../ax_results/coffee_result2.txt';
import textFile3 from 'raw-loader!../ax_results/coffee_result3.txt';

export default {
    name: 'HomePlans',
    data() {
        return {
            drinks: [
                {
                    title: 'EXAMPLE 1',
                    paragraphs: [
                        {
                            text: 'Lorem ipsum'
                        },
                        {
                            text: 'Dolor sit Amet'
                        },
                        {
                            text: 'Consect Etur Adipiscing Elit'
                        }
                    ],
                    img_url: image1,
                    textFile: textFile1
                },
                {
                    title: 'EXAMPLE 2',
                    paragraphs: [
                        {
                            text: 'Lorem ipsum'
                        },
                        {
                            text: 'Dolor sit Amet'
                        },
                        {
                            text: 'Consect Etur Adipiscing Elit'
                        }
                    ],
                    img_url: image2,
                    textFile: textFile2
                },
                {
                    title: 'EXAMPLE 3',
                    paragraphs: [
                        {
                            text: 'Lorem ipsum'
                        },
                        {
                            text: 'Dolor sit Amet'
                        },
                        {
                            text: 'Consect Etur Adipiscing Elit'
                        }
                    ],
                    img_url: image3,
                    textFile: textFile3
                }
            ]
        };
    },
    // TODO: Switch to Vuex and use Mutations to change states and request data:
    mounted() {
        this.parseAXResponse();
    },
    methods: {
        parseAXResponse() {
            // TODO: Currently only removes special signs instead of converting them
            var WINDOWS_1252 =
                '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ';

            for (var i = 0; i < this.drinks.length; i++) {
                var text = '';
                var textFile = this.drinks[i].textFile;
                for (var j = 0; j < textFile.length; j++) {
                    text += WINDOWS_1252.charAt(textFile.charCodeAt(j));
                }

                let split = text.split('</h1>');
                let coffee_title = split[0].split('<h1>')[1];
                let coffee_paragraph_split = split[1].split('<p>');
                let paragraph1 = coffee_paragraph_split[1].replaceAll(
                    '</p>',
                    ''
                );
                let paragraph2 = coffee_paragraph_split[2].replaceAll(
                    '</p>',
                    ''
                );
                let paragraph3 = coffee_paragraph_split[3].replaceAll(
                    '</p>',
                    ''
                );

                this.drinks[i].title = coffee_title;
                this.drinks[i].paragraphs[0].text = paragraph1;
                this.drinks[i].paragraphs[1].text = paragraph2;
                this.drinks[i].paragraphs[2].text = paragraph3;
            }
        }
    }
};
</script>

<style scoped></style>
