<template>
    <span>
        <home-hero></home-hero>
        <home-work></home-work>
        <home-history></home-history>
        <home-coffee-cards></home-coffee-cards>
        <page-footer></page-footer>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeWork from '@/components/HomeWork';
import HomeHistory from '@/components/HomeHistory';
import HomeCoffeeCards from '@/components/HomeCoffeeCards';
import PageFooter from '@/components/PageFooter';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeWork,
        HomeHistory,
        HomeCoffeeCards,
        PageFooter
    }
};
</script>
