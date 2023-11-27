/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5722",
        light: "#fff7ed",
        onHover: "#e07a1c",
        text_dark: "rgb(2 6 23)",
        text_light: "rgb(255 255 255)",
        btn_color: "#ff8c22 ",
      },
      borderRadius: {
        sm: "2px",
      },

      screens: {
        sm: "640px",

        md: "800px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
