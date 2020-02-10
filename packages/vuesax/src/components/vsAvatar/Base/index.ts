import './style.sass'
import component from './VsAvatar'

component.install = (vue: any) => {
  vue.component('vs-avatar', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
