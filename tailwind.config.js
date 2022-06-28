/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'fem': {
                100: 'hsl(233, 47%, 7%)',
                200: 'hsl(244, 38%, 16%)',
                300: 'hsl(277, 64%, 61%)',
                400: 'hsl(0, 0%, 100%)',
                500: 'hsla(0, 0%, 100%, 0.75)',
                600: 'hsla(0, 0%, 100%, 0.6)',
            },
        },
        fontFamily: {
            // 'redhat': ['Red Hat Display','sans-serif'],
            'inter': ['Inter', 'sans-serif'],
            'lexend': ['Lexend Deca', 'sans-serif'],
        },
        // screens: {
        //     'mobile': '376px',
        //     // => @media (min-width: 640px) { ... }

        //     'desktop': '1441px',
        //     // => @media (min-width: 1280px) { ... }
        // },
    },
  },
  plugins: [],
}
