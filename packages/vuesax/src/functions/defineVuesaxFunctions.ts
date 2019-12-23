import { setColor } from '../util/index'

export default (Vue: any) => {
  const vsFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    }
  }
  Vue.prototype.$vs = vsFunctions
}
