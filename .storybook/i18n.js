import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const initI18n = () => {
  i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: [
      'en',
      'de',
    ],
    interpolation: {
        escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          "SomeLocalizedKey": "It's translated to English"
        }
      },
      de: {
          translation: {
            "SomeLocalizedKey": "Es ist Deutsch"
          }
        }
    },
  });
}

export default initI18n;