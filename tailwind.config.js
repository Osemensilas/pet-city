/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        bars: "var(--bars)",
        background: "var(--background)",
        backgroundLight: "var(--backgroundLight)",
        accent: "var(--accent)",
        text: "var(--text)",
        grey: "var(--grey)",
        danger: "var(--danger)",
        lighterGrey: "var(--lighterGrey)",
        header: "var(--header)",
        orange: "var(--orange)"
      }
    },
  },
  plugins: [],
}

