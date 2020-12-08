import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#004b86',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background : '#e6e7ec',
        nav : '#ffffff',
        navActive : '#004b86',
        font : '#FF5252',
        fontPrimary : '#FF5252'
      },
      dark: {
        primary: '#64B5F6',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background : '#121212',
        nav : '#1e1e1e',
        navActive : '#004b86',
        font : '#004b86',
        fontPrimary : '#0068b8'
      },
    },
  },
});
