import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from "../lang/en";

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en
    }, // set locale messages
});

export default i18n;
