import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index'

@Component
export default class VsButton extends VsComponent {
  [x: string]: any
  public Class: string = ''

  public prototype: any

  @Prop({ type: String, default: '' }) public ripple!: string

  @Prop({ type: Boolean, default: false }) public activeDisabled!: boolean
  // type Button Style
  @Prop({ type: Boolean, default: false }) public flat!: boolean

  @Prop({ type: Boolean, default: false }) public border!: boolean

  @Prop({ type: Boolean, default: false }) public gradient!: boolean

  @Prop({ type: Boolean, default: false }) public relief!: boolean

  @Prop({ type: Boolean, default: false }) public transparent!: boolean

  @Prop({ type: Boolean, default: false }) public shadow!: boolean

  @Prop({ type: Boolean, default: false }) public floating!: boolean

  @Prop({ type: Boolean, default: false }) public icon!: boolean

  @Prop({ type: Boolean, default: false }) public circle!: boolean

  @Prop({ type: Boolean, default: false }) public square!: boolean

  @Prop({ type: String, default: null }) public size!: string

  @Prop({ type: Boolean, default: false }) public loading!: boolean

  @Prop({ type: Boolean, default: false }) public upload!: boolean

  @Prop({ type: Boolean, default: false }) public block!: boolean

  @Prop({ type: String, default: '' }) public animationType!: string

  @Prop({ type: Boolean, default: false }) public animateInactive!: boolean

  @Prop({ type: String, default: null }) public to!: string | null

  @Prop({ type: String, default: null }) public href!: string | null

  @Prop({ type: Boolean, default: false }) public blank!: boolean

  public render(h: any): VNode {

    const defaultSlot = h('div', {
      staticClass: 'vs-button__content'
    }, this.$slots.default )

    const animateSlot = h('div', {
      staticClass: 'vs-button__animate',
      class: [
        `vs-button__animate--${this.animationType}`
      ]
    }, this.$slots.animate )

    const loadingElement = h('div', {
      staticClass: 'vs-button__loading'
    })

    const btn = h('button', {
      staticClass: 'vs-button',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        // `vs-button--${this.color.replace('#', '')}`,
        `vs-button--${this.componentColor}`,
        `vs-button--size-${this.size}`,
        { [`vs-button--fff`] : this.color === '#fff' },
        { [`vs-button--active`] : !!this.active },
        { [`vs-button--active-disabled`] : !!this.activeDisabled },
        { [`vs-button--icon`] : !!this.icon },
        { [`vs-button--circle`] : !!this.circle },
        { [`vs-button--square`] : !!this.square },
        { [`vs-button--loading`] : !!this.loading },
        { [`vs-button--upload`] : !!this.upload },
        { [`vs-button--block`] : !!this.block },
        { [`vs-button--animate`] : !!this.$slots.animate },
        { [`vs-button--animate-${this.animationType}`] : !!this.animationType },
        { [`vs-button--animate-inactive`] : !!this.animateInactive },

        // colors
        { [`vs-button--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
        { [`vs-button--danger`] : !!this.danger },
        { [`vs-button--warn`] : !!this.warn },
        { [`vs-button--success`] : !!this.success },
        { [`vs-button--dark`] : !!this.dark },

        { [`vs-button--default`] :
          !this.flat &&
          !this.border &&
          !this.gradient &&
          !this.relief &&
          !this.transparent &&
          !this.shadow &&
          !this.floating
        },
        { [`vs-button--flat`] : !!this.flat },
        { [`vs-button--border`] : !!this.border },
        { [`vs-button--gradient`] : !!this.gradient },
        { [`vs-button--relief`] : !!this.relief },
        { [`vs-button--transparent`] : !!this.transparent },
        { [`vs-button--shadow`] : !!this.shadow },
        { [`vs-button--floating`] : !!this.floating },
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        mousedown: (evt: EventTarget) => {
          // ripple effect
          if (this.ripple === 'reverse') {
            rippleReverse(evt)
          } else if (this.ripple === 'cut') {
            rippleCut(evt)
          } else {
            if (this.flat) {
              ripple(
                evt,
                (this.componentColor || this.color || 'primary') &&
                !this.active &&
                document.activeElement !== this.$el ? 'inherit' :
                null,
                this.flat && !this.active && document.activeElement !== this.$el
              )
            } else {
              ripple(
                evt,
                null,
                false
              )
            }
          }
        },
        click: (evt: EventTarget) => {
          if (this.to) {
            this.$router.push(this.to)
          } else if (this.href) {
            window.open(this.href, this.blank && '_blank' || '_self')
            // console.log(this.blank && '_self')
          }
          this.$emit('click', evt)
        }
      }
    }, [ defaultSlot, this.$slots.animate ? animateSlot : null , this.loading ? loadingElement : null ] )
    return btn
  }
}
