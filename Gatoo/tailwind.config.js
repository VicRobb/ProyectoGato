/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      
        'light_blue' : "#31C3BD",
        'light_blue_hover' : "#65E99E4",
        'light_yellow' : "#F2B137",
        'light_yellow_hover': "#FFC860",
        'silver' : "A8BFC9",
        'silver_hover':"DBE8ED",
        'dark_navy':"#1A2A33",
        'semi_dark_navy':"#1F3641",
      
      'white':"#FAFBF4"
    },
    extend: {},
  },
  plugins: [],
}

