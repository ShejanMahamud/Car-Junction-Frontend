/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#FF3811'
      },
      fontFamily:{
        'inter' : 'Inter'
      },
      backgroundImage: {
        'banner-1': "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/wzj8r9k/Rectangle-2.jpg')",
        'banner-2': "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/h1cLvJ6/2.jpg')",
        'banner-3': "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/QQBVvc6/1.jpg')",
        'banner-4': "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/FKQZHbr/6.jpg')",
        'banner-5': "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/m0tr5JR/4.jpg')",
        'banner-6': "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%), url('https://i.ibb.co/HrhxTzj/3.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}