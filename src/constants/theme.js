export let theme = {
  isBlackTheme: true,
  black: {
    background: '#020405',
    lines: '#1B2329',
    textBG: '#040B12',
    textBGShadow:
      '5px 10px 10px -4px rgba(0, 0, 0, 0.8), inset -2px -2px 6px -4px rgba(0, 0, 0, 0.15);',
    outline: '#66C4FF',
    aside: {
      background: '#03090F',
      active: '#F3F3F3',
      default: '#A6A9B3'
    },
    text: {
      main: '#F3F3F3',
      hover: '#DCE0E8',
      sub: '#A6A9B3',
      active: '#2C8CDA',
      grey: '#4C5F6B',
      dropShadow: 'drop-shadow(0 0 0.1rem #030405)'
    },
    button: {
      static: {
        border: '#2C8CDA',
        background: '#2C8CDA',
        text: '#030405',
        shadow:
          '5px 10px 10px -4px rgba(0, 0, 0, 0.4), inset -2px -2px 6px -4px rgba(0, 0, 0, 0.15)'
      },
      hover: {
        border: '#2C8CDA',
        background: '#2161A6',
        text: '#030405',
        shadow:
          '5px 10px 10px -4px rgba(0, 0, 0, 0.4), inset -2px -2px 6px -4px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  white: {
    background: '#F3F3F3',
    lines: '#EDEFF2',
    textBG: '#EDEFF2',
    textBGShadow: '0px 3px 6px -4px #979DA6',
    outline: '#2161A6',
    aside: {
      background: '#EDEFF2',
      active: '#030405',
      default: '#4C5F6B'
    },
    text: {
      main: '#030405',
      hover: '#11181F',
      sub: '#4C5F6B',
      active: '#2C8CDA',
      grey: '#A6A9B3',
      dropShadow: 'drop-shadow(0 0 0.1rem #030405)'
    },
    button: {
      static: {
        border: '#2C8CDA',
        background: '#2C8CDA',
        text: '#030405',
        shadow: '0px 4px 6px 0px #979DA6'
      },
      hover: {
        border: '#2C8CDA',
        background: '#2161A6',
        text: '#030405',
        shadow: '0px 4px 6px -2px #979DA6'
      }
    }
  }
}
