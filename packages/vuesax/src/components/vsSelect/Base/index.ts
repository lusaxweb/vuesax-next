import './style.sass'
import component from './VsSelect'

component.install = (vue: any) => {
  vue.component('vs-select', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
