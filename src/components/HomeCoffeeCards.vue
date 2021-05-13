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
                            <v-layout row justify-end>
                                <v-col cols="7">
                                    <LanguageDropdown
                                        v-model="selectedLanguage"
                                        @input="changeLanguage(drink)"
                                    ></LanguageDropdown>
                                </v-col>
                            </v-layout>
                            <h3 class="headline mb-0">{{ drink.title }}</h3>
                            <p></p>
                            <p
                                :style="{
                                    'background-color': diff
                                        ? 'gold'
                                        : 'initial'
                                }"
                                id="card-text"
                            >
                                {{ drink.paragraph }}
                            </p>
                            <p></p>
                            <!--
                            This can be used to insert empty lines into hero cards: (just empty paragraph)
                            <p></p>
                            <div>
                              {{ drink.text }}
                            </div>
                            -->
                        </div>
                    </v-card-title>
                    <v-flex class="text-right">
                        <v-btn
                            outlined
                            color="red"
                            id="regenerate-btn"
                            v-on:click="regenerateText(drink)"
                            >Regenerate</v-btn
                        >
                    </v-flex>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import image1 from '../assets/cafe1_vert.jpg';
import image2 from '../assets/cafe5_vert.jpg';
import image3 from '../assets/cafe2_vert.jpg';
import textFileEspressoEN from 'raw-loader!../ax_results/espresso_EN.txt';
import textFileLatteEN from 'raw-loader!../ax_results/latte_EN.txt';
import textFileCappuccinoEN from 'raw-loader!../ax_results/cappuccino_EN.txt';
import textFileEspressoDE from 'raw-loader!../ax_results/espresso_DE.txt';
import textFileLatteDE from 'raw-loader!../ax_results/latte_DE.txt';
import textFileCappuccinoDE from 'raw-loader!../ax_results/cappuccino_DE.txt';
import LanguageDropdown from './LanguageDropdown';

export default {
    name: 'HomeCoffeeCards',
    components: { LanguageDropdown },
    data() {
        return {
            drinks: [
                {
                    title: 'EXAMPLE 1',
                    paragraph: 'lorem ipsum',
                    img_url: image1,
                    textFile: textFileEspressoEN
                },
                {
                    title: 'EXAMPLE 2',
                    paragraph: 'lorem ipsum',
                    img_url: image2,
                    textFile: textFileLatteEN
                },
                {
                    title: 'EXAMPLE 3',
                    paragraph: 'lorem ipsum',
                    img_url: image3,
                    textFile: textFileCappuccinoEN
                }
            ],
            languageFiles: {
                textFileCappuccinoEN: textFileCappuccinoEN,
                textFileEspressoEN: textFileEspressoEN,
                textFileLatteEN: textFileLatteEN,
                textFileCappuccinoDE: textFileCappuccinoDE,
                textFileEspressoDE: textFileEspressoDE,
                textFileLatteDE: textFileLatteDE
            },
            diff: false,
            selectedLanguage: 'English'
        };
    },
    // TODO: Switch to Vuex and use Mutations to change states and request data:
    mounted() {
        this.parseAXResponse();
    },
    methods: {
        parseAXResponse() {
            for (let i = 0; i < this.drinks.length; i++) {
                const textFile = this.drinks[i].textFile;
                let split = textFile.split('</h1>');
                let coffee_title = split[0].split('<h1>')[1];
                let coffee_paragraph_split = split[1].split('<p>');
                let paragraph = coffee_paragraph_split[1].replaceAll(
                    '</p>',
                    ''
                );

                this.drinks[i].title = coffee_title;
                this.drinks[i].paragraph = paragraph;
            }
        },
        regenerateText(drink) {
            let oldValue = drink.paragraphs[0].text;
            let newValue = 'TEST';
            drink.paragraphs[0].text = newValue;
            this.diff = !oldValue.includes(newValue);
        },
        changeLanguage(drink) {
            const drinkIndex = this.drinks.findIndex(
                dataDrink => dataDrink.title == drink.title
            );
            let textFileString;
            switch (this.selectedLanguage) {
                case 'English':
                    textFileString =
                        'textFile' + drink.title.split(' ')[0] + 'EN';
                    this.drinks[drinkIndex].textFile = eval(
                        'this.languageFiles.' + textFileString
                    );
                    console.log(this.drinks[drinkIndex].textFile);
                    this.parseAXResponse();
                    break;
                case 'German':
                    textFileString =
                        'textFile' + drink.title.split(' ')[0] + 'DE';
                    this.drinks[drinkIndex].textFile = eval(
                        'this.languageFiles.' + textFileString
                    );
                    this.parseAXResponse();
                    break;
            }
        }
    }
};
</script>

<style scoped>
#card-text {
    word-break: normal;
}
</style>
