import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface MyContacts {
  [key: string]: {
    [key: string]: string
  }
}

export  interface MyInformationObject {
  [key: string]: string;
}

export const useLeftColumnStore = defineStore('leftColumn', () => {

  const myInformationObject = ref<MyInformationObject>({
      'Возраст': '26 лет', 
      'Профессия': 'Frontend developer', 
      'Телефон': '+9 (999) 000-00-00', 
      'Город': 'Санкт-Петербург'
    });

    const mySkills = ref<string[]>(["HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Vue3",
    "Vite",
    "NPM",
    "GIT",
    "Figma",
  ]);

  const myContacts = ref<MyContacts>({
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
      hrefSocial: "mailto: penekkakti@gmail.com",
      assetIcon: "gmail-icon.png" ,
      altSocial: "Иконка Gmail",
      nameSocial: "Gmail",
    }
  });

  return {
    myInformationObject, 
    mySkills, 
    myContacts
  };
});