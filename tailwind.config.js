/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { carp: "#020f0880" },
      letterSpacing: {
        1: "0em",
        2: "0.025em",
        3: "0.05em",
        4: "0.1em",
        5: "0.15em",
        6: "0.25em",
        7: "0.5em",
        8: "1em",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
