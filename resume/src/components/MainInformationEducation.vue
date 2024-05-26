
<script setup lang="ts">

    defineProps<{
        universityName: string;
        universityFaculty: string;
        universityDate: string;
    }>();

</script>


<template>

    <div class="main-information__education">
        <h3>Образование:</h3>
        <div class="main-information__university"> {{ universityName }} {{ universityFaculty }} {{ universityDate }}</div>
    </div>


</template>


<style lang="scss" scoped>

.main-information__education {
    margin-top: 30px;
        h3 {
        margin-bottom: 22px;
    }

    @media screen and (width<=920px){ 
        margin: 0;
    }
}

</style>