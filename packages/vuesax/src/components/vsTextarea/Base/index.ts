import './style.sass'
import component from './vsTextarea'

component.install = (vue: any) => {
  vue.component('vs-textarea', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
