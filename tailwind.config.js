module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  content: ["./src/**/*.{html,ts}"],
  safelist: ["bg-blue-400", "bg-red-400", "bg-green-400", "bg-yellow-400"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
