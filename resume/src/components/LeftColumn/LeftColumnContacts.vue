<script setup lang="ts">

    defineProps<{
        href: string,
        icon: string,
        alternative: string,
        name: string
    }>();

    function getPathURL(item: string): string{
        const path = new URL(`../../assets/images/${item}`, import.meta.url).href
        return path
    }
    
</script>

<template>

        <a :href="href" target="_blank">
            <img 
            :src="getPathURL(icon)" 
            :alt="alternative">

            <span>{{ name }}</span>
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