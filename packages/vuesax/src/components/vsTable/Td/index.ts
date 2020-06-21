import './style.sass'
import component from './VsTableTd'

component.install = (vue: any) => {
  vue.component('vs-td', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
