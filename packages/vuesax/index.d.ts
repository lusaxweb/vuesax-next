import Vue , { VueConstructor } from 'vue'

export interface IVuesax {
  theme: string
  lang: string
  rtl: boolean
}

declare module 'vue/types/vue' {
  // tslint:disable-next-line:interface-name
  export interface Vue {
    $vuesax: IVuesax
    $vs: any
  }
}

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    Vue: VueConstructor,
    consolee: any
  }
}
