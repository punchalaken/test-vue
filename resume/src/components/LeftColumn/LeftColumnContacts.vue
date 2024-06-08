<script setup lang="ts">
    defineProps<{
        contactsObject: {
            [contactName: string]: {
                [nameValue: string]: string
            }
        }
    }>();

</script>


<template>

    <article class="left-column__contacts" v-for="(value, key) in contactsObject" :key="key">
        <a :href="value.hrefSocial"
            target="_blank">
            <img 
                :src="`../assets/images/${ value.assetIcon }`"
                :alt="value.altSocial">
            <span>{{ value.nameSocial }}</span>
        </a>
    </article>

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