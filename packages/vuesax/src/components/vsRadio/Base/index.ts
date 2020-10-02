import './style.sass'
import component from './vsRadio'

component.install = (vue: any) => {
  vue.component('vs-radio', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
