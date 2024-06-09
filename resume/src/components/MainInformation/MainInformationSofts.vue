<script setup lang="ts">

    defineProps<{
        softsObject: {
            [softNumber: string]: {
                [nameValue: string]: string
            }
        }
    }>();

</script>

<template>

<div class="main-information__softs">
    <h3>Навыки:</h3>
    <div v-for="(value, key) in softsObject" :key="key" class="main-information__personality">
        <div class="main-information-levels">
            <div>{{ value.start }}</div>
            <div>{{ value.stop }}</div>
        </div>
        <div class="main-information__personality-line">
            <div class="main-information__personality-point" :style="{ 'margin-left': value.persentValue + '%' }"></div>
        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>

.main-information__softs{
    display: flex;
    flex-direction: column;

    h3{
        margin-bottom: 22px;
    }

    @media screen and (width<=1300px){
        margin-top: 30px;
        order: 2;
    }
}

.main-information__personality {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.main-information-levels {
    display: flex;
    justify-content: space-between;
}

.main-information__personality-line {
    position: relative;
    height: 3px;
    background-color: #d2d2d2;
    margin: 5px 7px;
}

.main-information__personality-point {
    position: absolute;
    bottom: -8px;
    width: 16px;
    height: 16px;
    background-color: #7b7b7b;
    border: 2px solid #ffffff;
    border-radius: 50%;
}

</style>