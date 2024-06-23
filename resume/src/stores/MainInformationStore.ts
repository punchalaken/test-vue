import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface MyEducationObject {
    [key: string]: {
      Name: string,
      Faculty: string,
      Date: string
    };
  }

export interface MySoftObject {
    [key: string]: {
        start: string,
        stop: string,
        persentValue: string
    }
}

export interface MyJobInformation {
    [key: string]: {
        Name: string;
        Date: string;
        place: string;
        skillArray: string[];
      };
}

export const useMainInformationStore = defineStore('mainInformation', () => {

    const myDescription = ref<string>(`Я приверженец активного и позитивного образа жизни. Всегда стараюсь построить рабочий процесс так, чтобы люди, работающие
        со мной в команде, чувствовали себя комфортно и проявляли интерес к проекту. Всегда готов искренне помочь или выслушать. Активноучаствую 
        в корпоративной жизни и мероприятиях. В свободное время увлекаюсь музыкой, коллекционированием лего, кинематографом.`)
    
    const mySoftObject = ref<MySoftObject>({
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
    })
    
    const myJobInformation = ref<MyJobInformation>({
        firstJob: {
            Name: 'Медицинский брат',
            Date: 'Апрель 2019 - Октябрь 2023',
            place: 'ГБУЗ Ленинградская областная клиническая больница, Санкт-Петербург.',
            skillArray: ['Доврачебная медицинская помощь', 'Руководство младшим мед. персоналом', 'Организация ухода за больным']
        },
    })

    const myEducationObject = ref<MyEducationObject>({
        firstEducation: {
            Name: 'Высшее: Военно-медицинская академия им. С. М. Кирова.',
            Faculty:"Лечебный факультет",
            Date:"2021г",
        },
    })
     
  return {
    myDescription,
    mySoftObject,
    myJobInformation,
    myEducationObject
  };
});