import './style.sass'
import component from './vsPagination'

component.install = (vue: any) => {
  vue.component('vs-pagination', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
