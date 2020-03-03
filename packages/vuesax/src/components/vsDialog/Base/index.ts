import './style.sass'
import component from './VsDialog'

component.install = (vue: any) => {
  vue.component('vs-dialog', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
