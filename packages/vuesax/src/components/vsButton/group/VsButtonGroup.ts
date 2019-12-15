import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import { isColor, setColor } from '../../../util/index'
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index'

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
