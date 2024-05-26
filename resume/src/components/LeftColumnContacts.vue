<script setup lang="ts">

    const props = defineProps<{
        hrefSocial: string;
        assetIcon:string;
        altSocial: string;
        nameSocial: string;
    }>();

    const path = new URL(`../assets/images/${props.assetIcon}`, import.meta.url).href;

</script>


<template>

        <a :href="hrefSocial"
            target="_blank">
            <img 
                :src="path"
                :alt="altSocial">
            <span>{{ nameSocial }}</span>
        </a>

</template>


<style lang="scss" scoped>



a {
    display: flex;
    align-items: center;
    max-width: 150px;
    max-height: 45px;
    text-decoration: none;
    color: black;

    img {
        max-width: 30px;
        max-height: 30px;
        margin-right: 5px;
    }
}



</style>