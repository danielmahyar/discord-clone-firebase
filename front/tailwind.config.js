module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'discord-dark': {
          DEFAULT: '#202225'
        },

        'discord-gray': {
          DEFAULT: '#2F3136',
        },

        'discord-light': {
          DEFAULT: '#36393F',
        },

        'discord-user': {
          DEFAULT: '#292B2F',
        },

        'discord-border': {
          DEFAULT: '#42454A',
        },

        'discord-hover': {
          DEFAULT: '#34373C',
        },

        'discord-active': {
          DEFAULT: '#393C43',
        },

        'discord-text-primary': {
          DEFAULT: '#8E9297',
        },

        'discord-text-secondary': {
          DEFAULT: '#72767D',
        },

        'discord-text-input': {
          DEFAULT: '#40444B',
        }
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
      borderRadius: ['group-hover'],
      height: ['group-hover'],
      top: ['group-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
