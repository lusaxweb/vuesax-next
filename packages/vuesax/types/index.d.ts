import Vue, { VueConstructor } from 'vue'
import { VsAlert } from './components/vsAlert'

/** Alert Component */
export class Alert extends VsAlert {}

declare module 'vue/types/vue' {
  export interface Vue {
    $vs: any
    $router: any
  }
}

declare global {
  interface Window {
    Vue: VueConstructor
    consolee: any
  }
}

declare module '*.svg' {
  const content: string
  export default content
}
