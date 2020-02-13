import './style.sass'
import component from './VsTooltip'

component.install = (vue: any) => {
  vue.component('vs-tooltip', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
