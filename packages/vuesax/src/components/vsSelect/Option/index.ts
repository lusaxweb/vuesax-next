import './style.sass'
import component from './VsSelectOption'

component.install = (vue: any) => {
  vue.component('vs-option', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
