import { EnhanceApp } from 'vuepress-types'
import Vuesax from '../../vuesax/src/index'

const enhanceApp: EnhanceApp = ({ Vue }) => {
  Vue.use(Vuesax)
  Vue.prototype.$user = Vue.observable({
    user: null
  })
}

export default enhanceApp
