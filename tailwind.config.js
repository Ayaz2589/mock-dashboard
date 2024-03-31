/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64748b",
        "primary-hover": "#4b5563",
        secondary: "#e2e8f0",
        error: "#dc2626",
        "primary-text-color": "#cbd5e1",
        "primary-dropdown-text-color": "#94a3b8",
      },
      outline: {
        primary: "#64748b",
      },
    },
    varients: {
      extend: {
        outline: ["focus"],
      },
    },
  },
  plugins: [],
};
