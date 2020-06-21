import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsNavbarItem extends VsComponent {
  @Prop({ default: false, type: Boolean }) active: boolean
  @Prop({}) to: string
  @Prop({}) id: string
  @Prop({}) href: string
  @Prop({ default: '_blank' }) target: string

  @Watch('active')
  handleWatchActive() {
    this.handleLine()
  }

  handleLine() {
    this.$nextTick(() => {
      if (this.active) {
        const parent: any = this.$parent
        const left = (this.$el as any).offsetLeft
        parent.setLeftLine(left)
        const width = (this.$el as any).scrollWidth
        parent.setWidthLine(width)
      }
    })
  }

  handleClick() {
    if (this.to) {
      this.$router.push(this.to)
    } else if (this.href) {
      window.open(this.href, this.target)
    }
  }

  handleActive() {
    const parent: any = this.$parent
    parent.setModel(this.id)
    this.handleLine()
  }

  mounted() {
    setTimeout(() => {
      if (this.active) {
        const el: any = this.$el
        const parent: any = this.$parent
        const left = el.offsetLeft
        parent.setLeftLine(left)
        const width = el.scrollWidth
        parent.setWidthLine(width)
      }
    }, 150)
  }

  public render(h: any): VNode {
    return h('button', {
      staticClass: 'vs-navbar__item',
      class: {
        active: this.active
      },
      on: {
        click: (evt: any) => {
          this.$emit('click', evt)
          this.handleLine()
          this.handleClick()
          this.handleActive()
        }
      }
    }, this.$slots.default)
  }
}
