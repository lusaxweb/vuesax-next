import { setColor } from '../util/index'
import { setTheme, toggleTheme } from './toggleTheme/index'
import loading from './vsLoading/Base/index'
import notification from './vsNotification/Base/index'
import { checkAll, getLength, getPage, getSearch, sortData } from './vsTable/index'

export default (Vue: any) => {
  const vsFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    },
    loading,
    toggleTheme,
    setTheme,
    notification,
    getPage,
    getLength,
    checkAll,
    getSearch,
    sortData
  }

  Vue.prototype.$vs = vsFunctions
}
