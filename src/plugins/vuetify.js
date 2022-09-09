import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
      primary: "#009688",
      secondary: "#00bcd4",
      accent: "#9c27b0",
      error: "#f44336",
      warning: "#03a9f4",
      info: "#4caf50",
      success: "#cddc39"
      },
      dark: {
        primary: "#4caf50",
        secondary: "#8bc34a",
        accent: "#cddc39",
        error: "#ffeb3b",
        warning: "#ffc107",
        info: "#ff5722",
        success: "#795548",
      },
    },
  },
});
