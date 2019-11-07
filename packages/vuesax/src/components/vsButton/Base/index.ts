import './style.sass'

import component from './VsButton'
component.install = (vue: any) => {
  vue.component('vs-button', component)
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue)
}

export default component
