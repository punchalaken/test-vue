<script setup lang="ts">
import MainInformationHeader from './MainInformation/MainInformationHeader.vue';
import MainInformationAbout from './MainInformation/MainInformationAbout.vue';
import MainInformationJob from './MainInformation/MainInformationJob.vue';
import MainInformationSofts from './MainInformation/MainInformationSofts.vue';
import MainInformationEducation from './MainInformation/MainInformationEducation.vue';

const myEducationObject = {
    firstEducation: {
        Name: 'Высшее: Военно-медицинская академия им. С. М. Кирова.',
        Faculty:"Лечебный факультет",
        Date:"2021г",
    },
}

const mySoftObject = {
    fitsrtSoft: {
        start: 'Elementary',
        stop: 'Advanced',
        persentValue: '59'
    },
    secondSoft: {
        start: 'Интроверт', 
        stop:'Экстраверт', 
        persentValue: '65',
    },
    thirdSoft: {
        start: 'Рассеяный', 
        stop:'Организованный', 
        persentValue: '76',
    },
    fourthSoft: {
        start: 'Инертный', 
        stop:'Любознательный', 
        persentValue: '70',
    },
    fifthSoft: {
        start: 'Нервный', 
        stop:'Стрессоустойчивый', 
        persentValue: '80',
    },
}

const myJobInformation = {
    firstJob: {
        Name: 'Медицинский брат',
        Date: 'Апрель 2019 - Октябрь 2023',
        place: 'ГБУЗ Ленинградская областная клиническая больница, Санкт-Петербург.',
        skillArray: ['Доврачебная медицинская помощь', 'Руководство младшим мед. персоналом', 'Организация ухода за больным']
    },
}

const myDescription = `Я приверженец активного и позитивного образа жизни. Всегда стараюсь построить рабочий процесс так, чтобы люди, работающие
                        со мной в команде, чувствовали себя комфортно и проявляли интерес к проекту. Всегда готов искренне помочь или выслушать. Активноучаствую 
                        в корпоративной жизни и мероприятиях. В свободное время увлекаюсь музыкой, коллекционированием лего, кинематографом.`

    
</script>

<template >

<div class="main">

    <section class="main-information">

        <MainInformationHeader name="Клюев Семен"/>

        <h2 class="main-information__subheader">
            Обо мне:
        </h2>

        <MainInformationAbout :text="myDescription"/>
        
        <div class="main-information__skills">

            <MainInformationJob :job-object="myJobInformation" />

            <div class="main-information__progress"> 

                <MainInformationSofts :softs-object="mySoftObject"/> 

                <MainInformationEducation :educationObject="myEducationObject"/>
                
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