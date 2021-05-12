<template>
    <v-select
        v-model="e1"
        :items="languages"
        prepend-icon="mdi-translate"
    ></v-select>
</template>

<script>
export default {
    name: 'LanguageDropdown',
    data() {
        return {
            e1: 'German',
            languages: ['German', 'English']
        };
    }
};
</script>

<style scoped></style>
