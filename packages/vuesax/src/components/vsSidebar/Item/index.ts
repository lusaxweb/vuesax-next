import './style.sass'
import component from './vsSidebarItem'

component.install = (vue: any) => {
  vue.component('vs-sidebar-item', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
