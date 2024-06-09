<script setup lang="ts">

    defineProps<{
        educationObject: {
            [educationNumber: string]: {
                [nameValue: string]: string
            }
        }
    }>();

</script>

<template>

    <div class="main-information__education">
      <h3>Образование:</h3>
      <div class="main-information__university" v-for="(value, key) in educationObject" :key="key">{{ value.Name }} {{ value.Faculty }} {{ value.Date }}</div>
    </div>

</template>

<style lang="scss" scoped>

.main-information__education {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-top: 30px;

        h3 {
            margin-bottom: 22px;
        }

    @media screen and (width<=920px){ 
        margin: 0;
    }
}

</style>