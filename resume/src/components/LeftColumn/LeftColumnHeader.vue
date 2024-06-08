<script setup lang="ts">

    defineProps<{
        name: string;
    }>();

</script>


<template>

    <h2 class="left-column_header">
        {{ name }}
    </h2>

</template>


<style lang="scss" scoped>

.left-column_header {
    display: none;

    @media screen and (width<=920px) {
        display: block;
        font-size: 40px;
        }

    }



</style>