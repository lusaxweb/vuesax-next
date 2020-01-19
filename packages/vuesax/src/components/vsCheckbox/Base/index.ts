import './style.sass'
import component from './VsCheckbox'

component.install = (vue: any) => {
  vue.component('vs-checkbox', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
