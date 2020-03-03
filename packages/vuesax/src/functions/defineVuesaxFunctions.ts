import { setColor } from '../util/index'
import { setTheme, toggleTheme } from './toggleTheme/index'
import loading from './vsLoading/Base/index'
import notification from './vsNotification/Base/index'

export default (Vue: any) => {
  const vsFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    },
    loading,
    toggleTheme,
    setTheme,
    notification
  }

  Vue.prototype.$vs = vsFunctions
}
