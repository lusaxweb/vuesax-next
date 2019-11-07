import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsButton extends VsComponent {
  public Class: string = ''

  public prototype: any

  public handleClick() {
    alert('hola handleClick nuevo zx')
  }

  public render(h: any): VNode {
    return h('button', {
      class: ['vs-button', this.Class],
      on: {
        click: () => {
          this.handleClick()
        },
      },
    }, this.$slots.default)
  }
}
