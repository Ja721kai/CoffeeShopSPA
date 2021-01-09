<template>
    <span>
        <coffee-imprint></coffee-imprint>
        <page-footer></page-footer>
    </span>
</template>

<script>
import CoffeeImprint from '@/components/CoffeeImprint';
import PageFooter from '@/components/PageFooter';

export default {
    name: 'imprint',
    components: {
        CoffeeImprint,
        PageFooter
    }
};
</script>

<style scoped>
.page-footer {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
