<script setup lang="ts">

    defineProps<{
        jobObject: {
            [jobNumber: string]: {
                [nameValue: string]: string | Array<string>
            }
        }
    }>();

</script>

<template>

    <div class="main-information__job" v-for="(value, key) in  jobObject" :key="key">
        <h3>{{ value.Name }}</h3>
        <div>{{ value.Date }}</div>
        <p>{{ value.Place }}</p>
        
        <div class="main-information__responsibilities" v-for="item in value.skillArray" :key="item">
            <div class="main-information__point"></div>
            <span>{{ item }}</span>
        </div>
    </div>

</template>
  
<style scoped lang="scss">

.main-information__job{    
    max-width: 440px;
    min-width: 300px;
    h3 {
        margin-bottom: 22px;
    }

    .main-information__responsibilities {
        display: flex;

        .main-information__point {
            margin: 7px 5px 0 0;
            min-width: 10px;
            max-width: 10px;
            min-height: 10px;
            max-height: 10px;
            border-radius: 50%;
            background-color: #7B7B7B;
        }
    }
}


</style>