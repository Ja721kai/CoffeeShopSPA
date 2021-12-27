<template>
    <span>
        <home-hero></home-hero>
        <about></about>
        <home-coffee-cards></home-coffee-cards>
        <home-placeholder></home-placeholder>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import About from '@/components/About';
import HomeCoffeeCards from '@/components/HomeCoffeeCards';
import HomePlaceholder from '@/components/HomePlaceholder';

export default {
    name: 'home',
    components: {
        HomeHero,
        About,
        HomeCoffeeCards,
        HomePlaceholder
    }
};
</script>
