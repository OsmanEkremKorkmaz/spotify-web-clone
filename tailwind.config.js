module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '22.5': '5.625rem'
      },
      colors: {
        "backdrop": "#121212",
        "secondary": "#1db954",
        "primary": "#1ed760",
        "active": "#282828",
        "link": "#b3b3b3",
        "footer": "#181818",
        "subdued": "#a7a7a7",
        "highlight": "#f6f6f6",
        "7f": "#7f7f7f",
        "53": "#535353",
        "75": "#757575"
      },
      boxShadow: {
        category: '0 2px 4px 0 rgb(0 0 0 / 20%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
