<script setup lang="ts">
import { computed } from 'vue';

import MainInformationHeader from './MainInformation/MainInformationHeader.vue';
import MainInformationAbout from './MainInformation/MainInformationAbout.vue';
import MainInformationJob from './MainInformation/MainInformationJob.vue';
import MainInformationSofts from './MainInformation/MainInformationSofts.vue';
import MainInformationEducation from './MainInformation/MainInformationEducation.vue';

import { useMainInformationStore } from '@/stores/MainInformationStore';

const description = computed(() => useMainInformationStore().$state.myDescription)
const education = computed(() => useMainInformationStore().$state.myEducationObject)
const jobInformation = computed(() => useMainInformationStore().$state.myJobInformation)
const softs = computed(() => useMainInformationStore().$state.mySoftObject)

</script>

<template >

    <div class="main">

        <section class="main-information">

            <MainInformationHeader name="Клюев Семен"/>

            <h2 class="main-information__subheader">
                Обо мне:
            </h2>

            <MainInformationAbout :text="description"/>
            
            <div class="main-information__skills">

                <MainInformationJob :job-object="jobInformation" />

                <div class="main-information__progress"> 

                    <MainInformationSofts :softs-object="softs"/> 

                    <MainInformationEducation :educationObject="education"/>
                    
                </div>

            </div>

        </section>

    </div>

</template>


<style lang="scss" scoped>

    .main-information {
        box-sizing: border-box;
        margin-top: 62px;
        max-width: 961px;

        @media screen and (width<=1100px) {
                max-width: 920px;
                margin: 0;
                padding: 24px;
            }

        @media screen and (width<=650px) {
            display: flex;
            flex-direction: column;
        }
    }

    .main-information__skills {
        display: flex;
        justify-content: space-between;

        @media screen and (width <=1300px) {
                flex-direction: column;
            }

        @media screen and (width<=920px) {
            flex-direction: row;
        }

        @media screen and (width<=650px) {
            flex-direction: column;
        }
    }

    .main-information__progress {
        max-width: 440px;
        display: flex;
        flex-direction: column;

        @media screen and (width<=920px) {
            margin-left: 20px;
        }

        @media screen and (width<=650px) {

            margin: 20px 0 0 0;
        }
    }

</style>