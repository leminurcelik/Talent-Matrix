module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily:{
          mon: 'Montserrat'
        },
        borderRadius:{
          '0.25x': '0.125rem'
        },
        colors:{
          primary:{
            dark: '#007886',
            middle: '#489BA0',
            fon: '#8BD3CE'
          },
          secondary:{
            light: '#FCA992',
            main: '#FF8360'
          },
          neutral:{
            300: '#C3D0D5',
            700: '#5B616A'
          },
          line: '#CCE5E8'
        },
        margin:{
          18: '4.5rem',
        },
        height:{
          18.75: '4.6875rem'
        },
        width:{
          18.75: '4.6875rem'
        },
      },
    },
    plugins: [],
  }