<template>
    <span>
        <home-hero></home-hero>
        <home-work></home-work>
        <home-history></home-history>
        <home-plans></home-plans>
        <page-footer></page-footer>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeWork from '@/components/HomeWork';
import HomeHistory from '@/components/HomeHistory';
import HomePlans from '@/components/HomePlans';
import PageFooter from '@/components/PageFooter';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeWork,
        HomeHistory,
        HomePlans,
        PageFooter
    }
};
</script>
