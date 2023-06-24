/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'abc':{
          100:'#21618C',
          200:'white',
          300:'#5499C7'
        }
      },
      fontFamily:{
        'Poppins':['Poppins', 'sans-serif']
      }

    },
 
   
  },
  plugins: [],
}

