<script setup lang="ts">

    const props = defineProps<{
        jobName: string;
        jobDate: string;
        jobPlace: string;
        jobSkillArray: any[]
    }>();

</script>

<template>

    <div class="main-information__job">
        <h3>{{ jobName }}</h3>
        <div>{{ jobDate }}</div>
        <p>{{ jobPlace }}</p>
        
        <div class="main-information__responsibilities" v-for="item in props.jobSkillArray" :key="item">
            <div class="main-information__point"></div>
            <span>{{ item }}</span>
        </div>


    </div>

</template>
  
<style scoped lang="scss">

.main-information__job{    
    max-width: 440px;
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