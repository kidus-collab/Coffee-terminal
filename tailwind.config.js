/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./dist/*{.html,.js}"],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px',
       'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundImage: {
      'Rectangle': "url('/src/assets/Rectangle3.png')",
      'main' : "url('/src/assets/main.jpg')",
      'img1' : "url('src/assets/img1.jpg')",
      'cater1': "url('/src/assets/caterpic.jpg')",
      'cater2': "url('/src/assets/caterimg2.jpg')",
      'cater3': "url('/src/assets/caterimg3.jpg')"
    },
    zIndex: {
      md : '100',
      lg : '1000',
      xl : '9999'
    },
    fontFamily: {
      mont: ['montserrat', 'sans-serif'],
      pop:['poppins','sans-serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '4xl':['36px','47px'],
      '5xl':['48px','60px'],
      '6xl': ['60px','71px'],
      '7xl':	['72px','95px'],
      '8xl': ['96px','127px'],
      '9xl': ['128px'],
    },
    extend: {
      colors: {
        transparent : 'transparent'
      },
      margin: {
        '80px' : '80px',
        '90px' :'90px',
        '100px' : '100px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
