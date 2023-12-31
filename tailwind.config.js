// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js}",
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      // For the best performance and to avoid false positives,
      // be as specific as possible with your content configuration.
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };