import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsInput extends VsComponent {
  public render(h: any): VNode {
    return h('button', {
      class: ['vs-input'],
    }, this.$slots.default)
  }
}