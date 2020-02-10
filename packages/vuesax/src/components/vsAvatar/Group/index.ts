import './style.sass'
import component from './VsAvatarGroup'

component.install = (vue: any) => {
  vue.component('vs-avatar-group', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
