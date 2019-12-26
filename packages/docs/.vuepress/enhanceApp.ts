import { EnhanceApp } from 'vuepress-types'
import Vuesax from '../../vuesax/src/index'
// import '../../vuesax/dist/vuesax.css'

const enhanceApp: EnhanceApp = ({ Vue }) => {
  Vue.use(Vuesax)
}

export default enhanceApp
