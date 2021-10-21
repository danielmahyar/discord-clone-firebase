module.exports = {
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

        'discord-text-highlight': {
          DEFAULT: '#B9BBBE',
        },

        'discord-text-para': {
          DEFAULT: '#D7D6D9',
        },

        'discord-text-secondary': {
          DEFAULT: '#72767D',
        },

        'discord-text-input': {
          DEFAULT: '#40444B',
        },

        'discord-blue': {
          DEFAULT: '#06A2E0',
        },

        'discord-purple': {
          DEFAULT: '#5865F2',
        }
      },
      spacing: {
        '1/1': '100%'
      },
      width: {
        '126': '36rem'
      }
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
      borderRadius: ['group-hover'],
      height: ['group-hover'],
      top: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
