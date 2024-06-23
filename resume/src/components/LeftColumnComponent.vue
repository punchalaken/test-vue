<script setup lang="ts">

import { computed } from 'vue';

import LeftColumnPhoto from './LeftColumn/LeftColumnPhoto.vue';
import LeftColumnHeader from './LeftColumn/LeftColumnHeader.vue';
import LeftColumnInformation from './LeftColumn/LeftColumnInformation.vue';
import LeftColumnSkills from './LeftColumn/LeftColumnSkills.vue';
import LeftColumnContacts from './LeftColumn/LeftColumnContacts.vue';

import { useLeftColumnStore } from '@/stores/LeftColumnStore';

const information = computed(() =>useLeftColumnStore().$state.myInformationObject)
const skills = computed(() => useLeftColumnStore().$state.mySkills)
const contacts = computed(() => useLeftColumnStore().$state.myContacts)

</script>

<template >

    <section class="left-column">

        <LeftColumnPhoto name-photo="photo.jpg" />

        <LeftColumnHeader name="Клюев Семен"/>

        <h2 class="left-column__about">
            Junior frontend developer
        </h2>

        <article class="left-column__information">
            <ul>
                <LeftColumnInformation v-for="(value, item) in information" :key="item" 
                    :status-name="item"
                    :status-value="value"/>
            </ul>
        </article>

        <article class="left-column__skills">
            <ul class="left-column__skills-list">
                <LeftColumnSkills v-for="item in skills" :key="item" :skill="item"/>
            </ul>
        </article>
        
        <article class="left-column__contacts" >
            <LeftColumnContacts v-for="(item, key) in contacts" 
                :key="key" :href="item.hrefSocial" 
                :icon="item.assetIcon" 
                :alternative="item.altSocial" 
                :name="item.nameSocial"/>
        </article>

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

.left-column__information {
        max-width: 349px;
        width: 95%;
}

.left-column__skills-list {
        max-width: 349px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
}

.left-column__contacts {
    display: flex;
    max-width: 349px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

</style>