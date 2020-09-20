import './style.sass'
import component from './VsCardGroup'

component.install = (vue: any) => {
  vue.component('vs-card-group', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
