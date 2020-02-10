import { setColor } from '../util/index'
import darken from './vsDarken/index'
import loading from './vsLoading/Base/index'
import notification from './vsNotification/Base/index'

export default (Vue: any) => {
  const vsFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    },
    loading,
    darken,
    notification
  }

  Vue.prototype.$vs = vsFunctions
}
