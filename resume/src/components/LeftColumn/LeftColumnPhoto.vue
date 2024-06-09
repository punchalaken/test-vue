<script setup lang="ts">

    const props = defineProps<{
        namePhoto: string;
    }>();

    const path = new URL(`../../assets/images/${props.namePhoto}`, import.meta.url).href;

</script>

<template>

    <img class="left-column__image"
        :src="path"
        alt="Моя фотография">

</template>

<style lang="scss" scoped>

    .left-column__image {
        display: block;
        width: 88%;
        border-radius: 50%;
        filter: grayscale(100%);
        box-shadow: 0px 7px 11px 0px #74747480;
        
        @media screen and (width<=500px) {
            max-width: 226px;
            max-height: 226px;
        }
    }

</style>