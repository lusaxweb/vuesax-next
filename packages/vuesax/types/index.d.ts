
import Vue, { VueConstructor, ComponentOptions } from 'vue'
import { VsAlert } from './components/VsAlert'

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
        Vue: VueConstructor,
        consolee: any
    }
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
    beforeRouteEnter?: any;
  }
}
