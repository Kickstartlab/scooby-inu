/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      orange: {
        "50": "#D78D00",
        "100": "#FF5B2E",
        "200": "#FB901A",
      },
      blue: {
        "50": "#656689",
        "100": "#000958",
        "200": "#3C3C51"
      },
      black: {
        "50": "#252525",
        "100": "#06071B",
      },
      white: {
        "50": "#fffaf5",
        "100": "#fff",
      },
      green: {
        "100": "#00C27E",
      },
      sky: {
        "100": "#73BFFF",
      },
      yellow: {
        "50": "#FFF4EA",
        "100": "#FFE4C8",
      },
    },
    fontFamily: {
      'poppins': ["'Poppins', sans-serif"],
      'slackey': ["'Slackey', cursive"],
    }
  },
  plugins: [],
}
