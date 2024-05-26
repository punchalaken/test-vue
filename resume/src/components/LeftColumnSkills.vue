<script setup lang="ts">

    defineProps<{
        skillArray: string[]
    }>();

</script>

<template>
    <article class="left-column__skills">
        <ul class="left-column__skills-list">
            <li v-for="item in skillArray" :key="item">
                {{ item }}
            </li>
        </ul>
    </article>
</template>
  
<style scoped lang="scss">

    .left-column__skills-list {
        max-width: 349px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        li {
            background-color: #7B7B7B;
            color: #ffffff;
            padding: 5px;
            font-size: 20px;
        }}

</style>