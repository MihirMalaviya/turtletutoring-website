const plugin = require('tailwindcss/plugin')

module.exports = {
  blocklist: ["collapse"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color) !important',
        DEFAULT: '0 2px 4px var(--tw-shadow-color) !important',
        lg: '0 8px 16px var(--tw-shadow-color) !important',
        xl: '0 12px 24px var(--tw-shadow-color) !important',
        '2xl': '0 16px 32px var(--tw-shadow-color) !important',
        '3xl': '0 24px 48px var(--tw-shadow-color) !important',
        '4xl': '0 32px 64px var(--tw-shadow-color) !important',
        '5xl': '0 40px 80px var(--tw-shadow-color) !important',
        '6xl': '0 48px 96px var(--tw-shadow-color) !important',
        '7xl': '0 64px 128px var(--tw-shadow-color) !important',
        '8xl': '0 80px 160px var(--tw-shadow-color) !important',
        '9xl': '0 96px 192px var(--tw-shadow-color) !important',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
