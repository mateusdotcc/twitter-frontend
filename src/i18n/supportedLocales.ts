export const defaultLocale = 'en-US';

export const supportedLocales = {
  'pt-BR': {},
  'en-US': {
    common: require('./locales/en-US/common.json'),
    login: require('./locales/en-US/login.json'),
    settings: require('./locales/en-US/settings.json'),
    home: require('./locales/en-US/home.json'),
  },
};
