/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["vzr"],
        vazirBold: ["vzr_bold"],
        vazirSemiBold: ["vzr_semiBold"],
      },
    },
  },
  plugins: [],
};
