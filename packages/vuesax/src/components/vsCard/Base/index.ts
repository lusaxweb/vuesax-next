import './style.sass'
import component from './VsCard'

component.install = (vue: any) => {
  vue.component('vs-card', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
