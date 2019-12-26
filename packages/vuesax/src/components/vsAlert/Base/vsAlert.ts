import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsAlert extends VsComponent {
  @Prop({ type: Boolean, default: false }) public solid!: boolean

  @Prop({ type: Boolean, default: false }) public border!: boolean

  @Prop({ type: Boolean, default: false }) public shadow!: boolean

  @Prop({ type: Boolean, default: false }) public gradient!: boolean

  @Prop({ type: Boolean, default: false }) public flat!: boolean

  @Prop({ type: Boolean, default: false }) public relief!: boolean

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'vs-alert',
      class: [
        { [`vs-alert--solid`] : !!this.solid },
        { [`vs-alert--border`] : !!this.border },
        { [`vs-alert--shadow`] : !!this.shadow },
        { [`vs-alert--gradient`] : !!this.gradient },
        { [`vs-alert--flat`] : !!this.flat },
        { [`vs-alert--relief`] : !!this.relief },
      ],
    }, this.$slots.default)
  }
}