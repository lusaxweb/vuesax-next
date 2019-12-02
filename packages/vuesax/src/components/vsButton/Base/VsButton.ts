import Color from 'color'
import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import { isColor, setColor } from '../../../util/index'
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index'

@Component
export default class VsButton extends VsComponent {
  public Class: string = ''

  public prototype: any

  @Prop({ type: String, default: '' }) public ripple!: string

  @Prop({ type: Boolean, default: false }) public activeDisabled!: boolean

  // type Button Style
  @Prop({ type: Boolean, default: false }) public flat!: boolean

  @Prop({ type: Boolean, default: false }) public border!: boolean

  @Prop({ type: Boolean, default: false }) public gradient!: boolean

  public setColors() {
    let ComponentColor: string = this.color

    if (!this.color) {
      ComponentColor = 'primary'
    }

    if (!isColor(ComponentColor)) {
      const colorDarken = Color(ComponentColor).darken(0.2).rgb().string()
      setColor('color-darken', colorDarken, this.$el)

      const colorRotate = Color(ComponentColor).rotate(25).rgb().string()
      setColor('color-rotate', colorRotate, this.$el)

    } else {
      const vsColor = `rgb(${getComputedStyle(this.$el).getPropertyValue('--vs-color')})`

      const colorDarken = Color(vsColor).darken(0.2).rgb().string()
      setColor('color-darken', colorDarken, this.$el)

      const colorRotate = Color(vsColor).rotate(25).rgb().string()
      setColor('color-rotate', colorRotate, this.$el)
    }
  }

  public mounted() {
    // this.setColors()
  }

  public render(h: any): VNode {
    const btn = h('button', {
      staticClass: 'vs-button',
      class: [
        { [`vs-button--active`] : !!this.active },
        { [`vs-button--active-disabled`] : !!this.activeDisabled },

        { [`vs-button--default`] :
          !this.flat &&
          !this.border &&
          !this.gradient
        },
        { [`vs-button--flat`] : !!this.flat },
        { [`vs-button--border`] : !!this.border },
        { [`vs-button--gradient`] : !!this.gradient },
      ],
      attrs: {
        ...this.$attrs
      },
      on: {
        ...this.$listeners,
        mousedown: (evt: any) => {
          // ripple effect
          if (this.ripple === 'reverse') {
            rippleReverse(evt)
          } else if (this.ripple === 'cut') {
            rippleCut(evt)
          } else {
            if (this.flat) {
              ripple(
                evt,
                this.color || this.flat && !this.active && document.activeElement !== this.$el ? 'primary' : null ,
                this.flat && !this.active && document.activeElement !== this.$el
              )
            } else {
              console.log('entro aqu', this.color)
              ripple(
                evt,
                null,
                false
              )
            }
          }
        }
      }
    }, this.$slots.default)

    return btn
  }
}
