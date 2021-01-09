<template>
    <v-container
        fluid
        class="coffee-imprint"
        id="imprint"
        style="margin-top: 48px; min-height: 80vh;"
    >
        <v-layout column>
            <v-flex class="display-2 text-xs-center my-5">Imprint</v-flex>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">
                    Fair-Coffee Konstanz GbR <br />
                    Musterstraße 123 <br />
                    7846X Konstanz <br />
                    Deutschland <br />
                    Telefon: +49 (0) 7531 / 12345 <br />
                    Geschäftsführer: Jan Kaiser, Jeffrey Lim <br />
                    <br />
                    Handelsregister: Amtsgericht irgendwo / HRB 123456 B <br />
                    Ust-ID-NR: DE123456789 <br />
                    <br />
                    Inhalte: Musterverantwortlicher <br />
                    <br />
                    Datenschutz: Musterverantwortlicher
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Imprint'
};
</script>

<style scoped>
.coffee-imprint {
    width: 100%;
}
</style>
