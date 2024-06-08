<script setup lang="ts">

    defineProps<{
        contactsObject: {
            [contactName: string]: {
                [nameValue: string]: string
                
            } 
        }
    }>();

    function getPathURL(item: string) {
        const path = new URL(`../../assets/images/${item}`, import.meta.url).href
        return path
    }
    
</script>


<template>

    <article class="left-column__contacts" >
        <a v-for="(value, key) in contactsObject" :key="key" :href="value.hrefSocial" target="_blank">
            <img 
            :src="getPathURL(value.assetIcon)" 
            :alt="value.altSocial">

            <span>{{ value.nameSocial }}</span>
        </a>
    </article>

</template>


<style lang="scss" scoped>

.left-column__contacts {
    display: flex;
    max-width: 349px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

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
}

</style>