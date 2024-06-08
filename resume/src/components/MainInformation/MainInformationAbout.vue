<script setup lang="ts">

    defineProps<{
        text: string;
    }>();

</script>

<template>

    <p class="main-information__about">
        {{ text }}
    </p>

</template>
  
<style scoped lang="scss">

    .main-information__about {
        text-indent: 20px;
    }

</style>