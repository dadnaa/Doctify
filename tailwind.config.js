/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {     colors:{
      primary:'#373C9E',
    background:"#f0f0f0",
    popUp :'#111827'},

      fontFamily:{
        body:['Poppins']},
        screens: {
         
         
        }
    },
  },
  plugins: [],
};
