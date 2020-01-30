import './style.sass'
import component from './vsOptionGroup'

component.install = (vue: any) => {
  vue.component('vs-option-group', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
