/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#7511F6",
        "para-bg-1": "#C88F78",
      },
    },
  },
  plugins: [],
};
