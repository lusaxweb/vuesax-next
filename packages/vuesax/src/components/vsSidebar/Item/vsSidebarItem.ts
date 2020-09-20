import { VNode, } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import VsIconsArrow from '../../../icons/arrow'

@Component
export default class VsSidebarItem extends VsComponent {

  @Prop({}) to: string
  @Prop({}) href: string
  @Prop({ default: '_blank' }) target: string

  @Prop({ type: String }) value: string
  @Prop({ type: String }) id: string
  @Prop({ type: Boolean }) arrow: boolean

  @Watch('$parent.reduce')
  handleReduce(val: boolean) {
    if (val) {
      console.log('reduce')
    }
  }

  handleClick() {
    if (this.to) {
      this.$router.push(this.to)
    } else if (this.href) {
      window.open(this.href, this.target)
    }
  }

  public render(h: any): VNode {
    const icon = h('div', {
      staticClass: 'vs-sidebar__item__icon'
    }, [
      this.$slots.icon
    ])

    const textTooltip = h('div', {
      staticClass: 'vs-sidebar__item__text-tooltip'
    }, [
      this.$slots.default
    ])

    const text = h('div', {
      staticClass: 'vs-sidebar__item__text'
    }, [
      this.$slots.default
    ])

    const iconArrow = h(VsIconsArrow)

    const arrow = h('div', {
      staticClass: 'vs-sidebar__item__arrow'
    }, [
      this.$slots.arrow || iconArrow
    ])

    return h('button', {
      staticClass: 'vs-sidebar__item',
      class: {
        active: (this.$parent as any).getValue && this.id == (this.$parent as any).getValue,
        hasIcon: !!this.$slots.icon
      },
      on: {
        click: () => {
          if (this.id) {
            (this.$parent as any).handleClickItem(this.id)
          }
          this.handleClick()
        }
      }
    }, [
      this.$slots.icon && icon,
      text,
      textTooltip,
      this.$slots.arrow || this.arrow && arrow
    ])
  }
}
