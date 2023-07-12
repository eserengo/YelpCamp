/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      "sm": "376px",
      "md": "768px",
      "lg": "1024px",
    },
    colors: {
      "white": "hsl(0, 0%, 99%)",
      "light-grey": "hsl(0, 0%, 95%)",
      "medium-grey": "hsl(0, 0%, 85%)",
      "dark-grey": "hsl(0, 0%, 60%)",
      "black": "hsl(0, 0%, 1%)",
    },
    extend: {},
  },
  plugins: [],
}