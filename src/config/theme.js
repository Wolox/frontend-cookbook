import Color from 'color'

let palettes = {
  primary: {
    lighthen2: '',
    lighthen1: '',
    default: '',
    darken1: '',
    darken2: '',
  },
  complementary: {
    lighthen2: '',
    lighthen1: '',
    default: '',
    darken1: '',
    darken2: '',
  }
}

export const getCurrentPalette = () => palettes

const getColorPalette = hexColor => {
  const color = new Color(hexColor)
  const lighthen2 = color.lighten(0.25).hex()
  const lighthen1 = color.lighten(0.15).hex()
  const darken1 = color.darken(0.15).hex()
  const darken2 = color.darken(0.25).hex()
  return {
    lighthen2,
    lighthen1,
    default: hexColor,
    darken1,
    darken2,
  }
}

export const setThemeColor = hexColor => {
  const color = new Color(hexColor)
  palettes = {
    primary: getColorPalette(hexColor),
    complementary: getColorPalette(color.rotate(180).hex())
  }
  const cssVariables = {
    '--global-primary-color': palettes.primary.default,
    '--global-primary-lighthen-1': palettes.primary.lighthen1,
    '--global-primary-lighthen-2': palettes.primary.lighthen2,
    '--global-primary-darken-1': palettes.primary.darken1,
    '--global-primary-darken-2': palettes.primary.darken2,
    '--global-complementary-color': palettes.complementary.default,
    '--global-complementary-lighthen-1': palettes.complementary.lighthen1,
    '--global-complementary-lighthen-2': palettes.complementary.lighthen2,
    '--global-complementary-darken-1': palettes.complementary.darken1,
    '--global-complementary-darken-2': palettes.complementary.darken2
  }
  Object.keys(cssVariables).forEach(variableKey => {
    document.documentElement.style.setProperty(variableKey, cssVariables[variableKey])
  })
}
