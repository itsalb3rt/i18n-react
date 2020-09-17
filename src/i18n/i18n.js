import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import en from './locales/en.json';
import es from './locales/es.json';
// the translations
const resources = {
    en: {
        common: en
    },
    es: {
        common: es
    }
};

i18n
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: '.', //for use dot notation. Example: {t(actions.save)}

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;