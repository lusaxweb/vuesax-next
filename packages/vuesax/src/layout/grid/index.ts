import './style.sass'
import vsCol from './vsCol'
import vsRow from './vsRow'

vsCol.install = (vue: any) => {
  vue.component('vs-col', vsCol)
}

vsRow.install = (vue: any) => {
  vue.component('vs-row', vsRow)
}

if (typeof window !== 'undefined' && window.Vue) {
  vsCol.install(window.Vue)
  vsRow.install(window.Vue)
}

export { vsCol, vsRow }
