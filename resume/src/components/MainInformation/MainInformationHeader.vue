<script setup lang="ts">

    defineProps<{
        name: string;
    }>();

</script>

<template>

    <header class="main-information__header">
        <h1>{{ name }}</h1>
    </header>

</template>
  
<style scoped lang="scss">

    .main-information__header>h1 {
        font-size: clamp(2rem, 1rem + 3vw, 6rem);
        line-height: 118px;

        @media screen and (width<=920px) {
            display: none;
        }
    }

</style>