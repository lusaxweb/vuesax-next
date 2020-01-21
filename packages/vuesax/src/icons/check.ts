import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './icons.sass'
@Component
export default class VsIconClose extends Vue {
  @Prop({ type: Boolean, default: false }) indeterminate: boolean

  render(h: any): VNode {
    const icon = h('i', {
      staticClass: 'vs-icon-check',
      on: {
        ...this.$listeners
      },
      class: [
        {
          indeterminate: this.indeterminate
        }
      ]
    }, [
      h('span', {} , [
        h('div', {
          staticClass: 'line1'
        }),
        h('div', {
          staticClass: 'line2'
        })
      ])
    ])

    return icon
  }
}
