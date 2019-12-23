import { setColor } from './index'

export interface IVuesaxOptions {
  colors?: IVuesaxColors
}

export interface IVuesaxColors {
  [item: string]: any
  primary: string
  success: string
  danger: string
  warn: string
  dark: string
}

const defineColors = (colors: IVuesaxColors) => {
  Object.keys(colors).forEach((item) => {
    setColor(item, colors[item], document.body)
  })
}

export const defineVuesaxOptions = (options: IVuesaxOptions) => {
  console.log(options)
  if (!!options.colors) {
    defineColors(options.colors)
  }
}
