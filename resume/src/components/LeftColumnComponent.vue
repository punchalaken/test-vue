<script setup lang="ts">
import LeftColumnPhoto from './LeftColumn/LeftColumnPhoto.vue';
import LeftColumnHeader from './LeftColumn/LeftColumnHeader.vue';
import LeftColumnInformation from './LeftColumn/LeftColumnInformation.vue';
import LeftColumnSkills from './LeftColumn/LeftColumnSkills.vue';
import LeftColumnContacts from './LeftColumn/LeftColumnContacts.vue';

const myContacts = {
    telegramContact: {
        hrefSocial: "https://t.me/Punchalaken",
        assetIcon: "telegram-icon.png" ,
        altSocial: "Иконка телеграма",
        nameSocial: "Телеграм",
    },
    vkContact: {
        hrefSocial: "https://vk.com/punchalaken",
        assetIcon: "vk-icon.png" ,
        altSocial: "Иконка ВКонтакте",
        nameSocial: "ВКонтакте",
    },
    gmailContact: {
        hrefSocial: "mailto:penekkakti@gmail.com",
        assetIcon: "gmail-icon.png" ,
        altSocial: "Иконка Gmail",
        nameSocial: "Gmail",
    }
}

const myInformationObject = {'Возраст': '26', 
            'Профессия': 'Frontend developer', 
            'Телефон': '+9 (999) 000-00-00', 
            'Город': 'Санкт-Петербург'}


</script>

<template >

<section class="left-column">

    <LeftColumnPhoto name-photo="photo.jpg" />

    <LeftColumnHeader name="Клюев Семен"/>

    <h2 class="left-column__about">
        Junior frontend developer
    </h2>

    <LeftColumnInformation :information-object="myInformationObject"/>
    
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

    
    <LeftColumnContacts :contactsObject="myContacts"/>
    

</section>
</template>


<style lang="scss" scoped>

.left-column {
    min-width: 360px;
    max-width: 469px;
    max-height: 900px;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    box-sizing: border-box;
    padding: 20px 10px 20px;
    margin: 37px 59px 0 41px;
    gap: 30px;

    @media screen and (width<=1100px) {
        max-width: 420px;
        margin: 34px 59px 0 34px;
    }
    
    @media screen and (width<=920px) {
        margin: 0;
        padding: 20px 0 0 0;
    }

    @media screen and (width<=500px) {
        min-height: 800px;
    }
}
</style>