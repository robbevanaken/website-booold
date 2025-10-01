module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1C1341',
        white: '#F7F3FA',
        pink: '#FF006E',
        orange: '#FB5607',
        brown: '#370617',
        red: '#FE4A49'
      },
      fontFamily: {
        'aspekta': ['Aspekta', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem', // 72px
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}