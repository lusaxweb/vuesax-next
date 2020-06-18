import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsTableTd extends VsComponent {
  @Prop({ type: Boolean }) checkbox: boolean
  @Prop({ type: Boolean }) edit: boolean
  public render(h: any): VNode {
    return h('td', {
      staticClass: 'vs-table__td',
      on: {
        click: (evt: any) => {
          this.$emit('click', evt)
        }
      },
      class: {
        isCheckbox: this.checkbox,
        isEdit: this.edit
      }
    }, this.$slots.default)
  }
}
