import { setColor } from '../util/index'
import loading from './vsLoading/Base/index'

export default (Vue: any) => {
  const vsFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    },
    loading
  }

  Vue.prototype.$vs = vsFunctions
}
