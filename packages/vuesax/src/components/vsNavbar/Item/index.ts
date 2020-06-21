import './style.sass'
import component from './VsNavbarItem'

component.install = (vue: any) => {
  vue.component('vs-navbar-item', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
