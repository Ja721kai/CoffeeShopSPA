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

// eslint-disable-next-line no-unused-vars
const sample = require('lodash.sample');

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
        this.drinks.forEach(x => {
            this.regenerateText(x);
        });
    },
    methods: {
        regenerateText(drink) {
            const drinkIndex = this.drinks.findIndex(
                dataDrink => dataDrink.title == drink.title
            );
            const textFile = this.drinks[drinkIndex].textFile;
            let split = textFile.split('</h1>');
            let coffee_title = split[0].split('<h1>')[1];
            let coffee_paragraph_split = split[1].split('<p>');
            let paragraphArray = [];
            for (let j = 1; j < coffee_paragraph_split.length; j++) {
                paragraphArray.push(
                    coffee_paragraph_split[j].replaceAll('</p>', '')
                );
            }

            this.drinks[drinkIndex].title = coffee_title;
            this.drinks[drinkIndex].paragraph = sample(paragraphArray);
        },
        changeLanguage(drink) {
            switch (this.selectedLanguage) {
                case 'English':
                    this.assignTextFileString(drink, 'EN');
                    break;
                case 'German':
                    this.assignTextFileString(drink, 'DE');
                    break;
            }
            this.regenerateText(drink);
        },
        assignTextFileString(drink, languageCode) {
            const drinkIndex = this.drinks.findIndex(
                dataDrink => dataDrink.title == drink.title
            );
            let textFileString;
            textFileString =
                'textFile' + drink.title.split(' ')[0] + languageCode;
            this.drinks[drinkIndex].textFile = eval(
                'this.languageFiles.' + textFileString
            );
            console.log(this.drinks[drinkIndex].textFile);
        }
    }
};
</script>

<style scoped>
#card-text {
    word-break: normal;
}
</style>
