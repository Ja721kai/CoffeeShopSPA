<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
        <page-footer></page-footer>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
import PageFooter from '@/components/PageFooter';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans,
        PageFooter
    }
};
</script>
