<script setup lang="ts">
import LeftColumnPhoto from './components/LeftColumnPhoto.vue';
import LeftColumnHeader from './components/LeftColumnHeader.vue';
import LeftColumnInformation from './components/LeftColumnInformation.vue';
import LeftColumnSkills from './components/LeftColumnSkills.vue';
import LeftColumnContacts from './components/LeftColumnContacts.vue';
import MainInformationHeader from './components/MainInformationHeader.vue';
import MainInformationAbout from './components/MainInformationAbout.vue';
import MainInformationJob from './components/MainInformationJob.vue';
import MainInformationSofts from './components/MainInformationSofts.vue';
import MainInformationEducation from './components/MainInformationEducation.vue';

</script>

<template >

<div class="main">

    <section class="left-column">

        <LeftColumnPhoto name-photo="photo.jpg" />

        <LeftColumnHeader name="Клюев Семен"/>

        <h2 class="left-column__about">
            Junior frontend developer
        </h2>

        <LeftColumnInformation :information-object="
                {'Возраст': '26', 
                'Профессия': 'Frontend developer', 
                'Телефон': '+9 (999) 000-00-00', 
                'Город': 'Санкт-Петербург'}"/>
        
        <LeftColumnSkills :skill-array='
        ["HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Vue2",
        "Vue3",
        "Vite",
        "NPM",
        "GIT",
        "Figma", 
        "Docker"]'/>

        <article class="left-column__contacts">
            <LeftColumnContacts 
                hrefSocial="https://t.me/Punchalaken" 
                assetIcon="telegram-icon.png" 
                alt-social="Иконка телеграма"
                nameSocial="Телеграм"/>

            <LeftColumnContacts 
                hrefSocial="https://vk.com/punchalaken" 
                assetIcon="vk-icon.png" 
                alt-social="Иконка ВКонтакте"
                nameSocial="ВКонтакте"/>

            <LeftColumnContacts 
                hrefSocial="mailto:penekkakti@gmail.com" 
                assetIcon="gmail-icon.png" 
                alt-social="Иконка Gmail"
                nameSocial="Gmail"/>
        </article>

    </section>

    <section class="main-information">

        <MainInformationHeader name="Клюев Семен"/>

        <h2 class="main-information__subheader">
            Обо мне:
        </h2>

        <MainInformationAbout text="Я приверженец активного и позитивного образа жизни. Всегда стараюсь построить рабочий
                процесс так, чтобы люди, работающие со мной в команде, чувствовали себя комфортно и
                проявляли интерес к проекту. Всегда готов искренне помочь или выслушать. Активно
                участвую в корпоративной жизни и мероприятиях. В свободное время увлекаюсь музыкой,
                коллекционированием лего, кинематографом."/>
        
        <div class="main-information__skills">
            <MainInformationJob 
                job-name="Медицинский брат" 
                job-date="Апрель 2019 - Октябрь 2023" 
                job-place="ГБУЗ Ленинградская областная клиническая больница, Санкт-Петербург."
                :job-skill-array="['Доврачебная медицинская помощь', 
                                'Руководство младшим мед. персоналом', 
                                'Организация ухода за больным']" />

            <div class="main-information__progress">
                <MainInformationSofts :skills-array="[['Elementary', 'Advanced', '59'],
                                                        ['Интроверт', 'Экстраверт', '65'],
                                                        ['Рассеяный', 'Организованный', '76'],
                                                        ['Инертный', 'Любознательный', '70'],
                                                        ['Нервный', 'Стрессоустойчивый', '80']]"/> 

                <MainInformationEducation universityName=" Высшее: Военно-медицинская академия им. С. М. Кирова." 
                                    universityFaculty="Лечебный факультет" 
                                    universityDate="2021г"/>
            </div>
        </div>
    </section>
</div>


</template>


<style lang="scss" scoped>

</style>