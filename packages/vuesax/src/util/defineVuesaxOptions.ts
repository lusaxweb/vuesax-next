import { setColor } from './index'

export interface VuesaxOptions {
  colors?: VuesaxColors
}

export interface VuesaxColors {
  [item: string]: any
  primary: string
  success: string
  danger: string
  warn: string
  dark: string
}

const defineColors = (colors: VuesaxColors) => {
  Object.keys(colors).forEach((item) => {
    if (document.body) {
      setColor(item, colors[item], document.body)
    }
  })
}

export const defineVuesaxOptions = (options: VuesaxOptions) => {
  if (!!options.colors) {
    defineColors(options.colors)
  }
}
