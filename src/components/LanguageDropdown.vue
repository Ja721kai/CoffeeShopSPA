<template>
    <v-select
        v-model="selectedLanguage"
        :items="languages"
        @input="changeLanguage()"
        prepend-icon="mdi-translate"
    ></v-select>
</template>

<script>
export default {
    name: 'LanguageDropdown',
    data() {
        return {
            selectedLanguage: 'English',
            languages: ['English', 'German']
        };
    },
    methods: {
        changeLanguage() {
            this.$emit('input', this.selectedLanguage);
        }
    }
};
</script>

<style scoped></style>
