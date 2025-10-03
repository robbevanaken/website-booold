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
        red: '#FE4A49',
        green: '#ccff33'
      },
      fontFamily: {
        'aspekta': ['Aspekta', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        "xs": ["clamp(10px, 1vw, 12px)", 1],
        "base": ["clamp(14px, 1.5vw, 20px)", 1.5],
        "lg": ["clamp(24px, 2.5vw, 32px)", 1.7],
        "xl": ["clamp(28px, 3vw, 56px)", 1.5],
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