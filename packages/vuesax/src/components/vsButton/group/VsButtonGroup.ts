import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsButton extends VsComponent {
  public Class: string = ''

  public prototype: any

  public render(h: any): VNode {

    const btnGroup = h('div', {
      staticClass: 'vs-button-group'
    }, this.$slots.default )

    return btnGroup
  }
}
