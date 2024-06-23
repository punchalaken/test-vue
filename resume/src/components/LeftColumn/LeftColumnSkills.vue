<script setup lang="ts">

    defineProps<{
        skill: string
    }>();

</script>

<template>

    <li>
        {{ skill }}
    </li>

</template>
  
<style scoped lang="scss">

li {
    background-color: #7B7B7B;
    color: #ffffff;
    padding: 5px;
    font-size: 20px;
}

</style>