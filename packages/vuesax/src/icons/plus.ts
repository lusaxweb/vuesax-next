import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import './icons.sass'
@Component
export default class VsIconClose extends Vue {
  @Prop({ type: Boolean, default: false }) public less!: boolean

  render(h: any): VNode {
    const icon = h('i', {
      staticClass: 'vs-icon-plus',
      class: {
        less: this.less
      },
      ref: 'icon',
      on: {
        ...this.$listeners
      }
    })

    return icon
  }
}
