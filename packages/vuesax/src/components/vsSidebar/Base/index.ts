import './style.sass'
import component from './VsSidebar'

component.install = (vue: any) => {
  vue.component('vs-sidebar', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
