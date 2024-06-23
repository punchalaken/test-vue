<script setup lang="ts">

    defineProps<{
        statusName: string,
        statusValue: string 
    }>();

</script>

<template>
    
    <li>
        <span>{{ statusName }}:</span>
        <span>{{ statusValue }}</span>
    </li>

</template>
  
<style scoped lang="scss">

li{
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1500px) {
        font-size: 20px;
    }
}

</style>