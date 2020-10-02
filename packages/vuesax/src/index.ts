import * as vsComponents from './components/index'
import defineVuesaxFunctions from './functions/defineVuesaxFunctions'
import * as vsLayouts from './layout/index'
import './styles/vuesax.sass'
import { defineVuesaxOptions, VuesaxOptions } from './util/defineVuesaxOptions'

const install = (Vue: any, options?: VuesaxOptions) => {
  // Components
  Object.values(vsComponents).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })
  // layout
  Object.values(vsLayouts).forEach((vsLayout) => {
    Vue.use(vsLayout)
  })

  if (options) {
    defineVuesaxOptions(options)
  }

  defineVuesaxFunctions(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export default install
export default install
