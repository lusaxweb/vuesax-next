import './style.sass'
import component from './VsSwitch'

component.install = (vue: any) => {
  vue.component('vs-switch', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
