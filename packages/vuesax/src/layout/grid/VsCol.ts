import Vue from 'vue'
import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class VsCol extends Vue {
  // tslint:disable-next-line:member-access
  static install: (vue: any) => any
  // tslint:disable-next-line:member-access
  static use: (vue: any) => any

  @Prop({ type: [String, Number], default: '12' }) public w!: string | number

  @Prop({ type: [String, Number], default: '0' }) public offset!: string | number

  @Prop({ type: [String, Number], default: '0' }) public order!: string | number

  @Prop({ type: [String, Number], default: '0' }) public lg!: string | number

  @Prop({ type: [String, Number], default: '0' }) public sm!: string | number

  @Prop({ type: [String, Number], default: '0' }) public xs!: string | number

  @Prop({ type: String, default: 'block' }) public type!: string

  @Prop({ type: String, default: 'flex-start' }) public justify!: string

  public render(h: any): VNode {

    const vsCol = h('div', {
      staticClass: 'vs-col',
      style: {
        order: this.order,
        display: this.type,
        justifyContent: this.justify,
      },
      class: [
        `vs-col--w-${this.w}`,
        `vs-col--offset-${this.offset}`,
        `vs-col--lg-${this.lg}`,
        `vs-col--sm-${this.sm}`,
        `vs-col--xs-${this.xs}`,
      ]
    }, this.$slots.default )

    return vsCol
  }
}
