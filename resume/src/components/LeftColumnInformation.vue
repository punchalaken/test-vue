<script setup lang="ts">

    interface SomeObject {
        [nomination: string]: string;
    }

    const props = defineProps<{
        informationObject: SomeObject;
    }>();

</script>

<template>
    <article class="left-column__information">
        <ul>
            <li v-for="(value, key) in props.informationObject" :key="key">
                <span>{{ key }}:</span>
                <span>{{ value }}</span>
            </li>
        </ul>
    </article>
</template>
  
<style scoped lang="scss">

    .left-column__information {
        max-width: 349px;
        width: 95%;

        li{
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 1500px) {
                font-size: 20px;
            }

        }
    }

</style>