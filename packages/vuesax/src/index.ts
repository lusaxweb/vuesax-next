import * as vsComponents from './components/index'
import './styles/vuesax.sass'

const install = (Vue: any) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export default install
export default install
