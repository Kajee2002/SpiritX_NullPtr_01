/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enables dark mode using the .dark class
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          sec: "var(--sec)",
          whiteIcon: "var(--white-icon)",
          hover: "var(--hover)",
          iconBg: "var(--icon-bg)",
        },
      },
    },
    plugins: [],
  };
  