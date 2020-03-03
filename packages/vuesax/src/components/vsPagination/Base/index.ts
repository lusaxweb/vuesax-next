import './style.sass'
import component from './VsPagination'

component.install = (vue: any) => {
  vue.component('vs-pagination', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
