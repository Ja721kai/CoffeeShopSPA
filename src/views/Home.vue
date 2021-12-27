<template>
    <span>
        <home-hero></home-hero>
<<<<<<< HEAD
        <home-coffee-cards></home-coffee-cards>
        <home-work></home-work>
        <home-history></home-history>
=======
        <about></about>
        <home-coffee-cards></home-coffee-cards>
>>>>>>> origin/dev_slim
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
