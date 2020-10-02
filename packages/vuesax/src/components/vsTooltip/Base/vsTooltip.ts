import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import { insertBody, setCordsPosition } from '../../../util/index'

@Component
export default class VsTooltip extends VsComponent {

  activeTooltip: boolean = false

  isHoverTooltip: boolean = false

  @Prop({}) value: any

  @Prop({ default: false, type: Boolean }) loading: boolean

  @Prop({ default: false, type: Boolean }) bottom: boolean

  @Prop({ default: false, type: Boolean }) left: boolean

  @Prop({ default: false, type: Boolean }) right: boolean

  @Prop({ default: false, type: Boolean }) notHover: boolean

  @Prop({ default: false, type: Boolean }) shadow: boolean

  @Prop({ default: false, type: Boolean }) interactivity: boolean

  @Prop({ default: false, type: Boolean }) notArrow: boolean

  @Prop({ default: false, type: Boolean }) square: boolean

  @Prop({ default: false, type: Boolean }) circle: boolean

  @Prop({ default: false, type: Boolean }) border: boolean

  @Prop({ default: false, type: Boolean }) borderThick: boolean

  @Prop({ default: null, type: String }) delay: any

  insertTooltip() {
    const tooltip = this.$refs.tooltip as HTMLElement
    insertBody(tooltip, document.body)

    let position = 'top'
    if (this.bottom) {
      position = 'bottom'
    } else if (this.left) {
      position = 'left'
    } else if (this.right) {
      position = 'right'
    }

    setCordsPosition(tooltip, this.$refs.content, position)
  }

  handlerMouseEnter() {
    if (this.delay) {
      setTimeout(() => {
        this.activeTooltip = true
        this.$nextTick(() => {
          this.insertTooltip()
        })
      }, Number(this.delay))
    } else {
      this.activeTooltip = true
      this.$nextTick(() => {
        this.insertTooltip()
      })
    }
  }

  removeTooltip() {
    this.activeTooltip = false
    this.$emit('input', false)
  }

  handleResize() {
    let position = 'top'
    if (this.bottom) {
      position = 'bottom'
    } else if (this.left) {
      position = 'left'
    } else if (this.right) {
      position = 'right'
    }
    const tooltip = this.$refs.tooltip as HTMLElement
    if (!tooltip) { return }
    this.$nextTick(() => {
      setCordsPosition(tooltip, this.$refs.content, position)
    })

    for (let index = 0; index < 300; index++) {
      setTimeout(() => {
        setCordsPosition(tooltip, this.$refs.content, position)
      }, index);
    }
  }

  handleMouseDownNotHover(evt: any) {
    if (!evt.target.closest('.vs-tooltip') && !evt.target.closest('.vs-tooltip-content')) {
      this.removeTooltip()
    }
  }

  @Watch('value')
  handleWatchValue(val: boolean) {
    this.activeTooltip = val
    if (val) {
      this.$nextTick(() => {
        this.insertTooltip()
      })
    }
  }

  mounted() {
    window.addEventListener('popstate', (event) => {
      const tooltips = document.querySelectorAll('.vs-tooltip')
      tooltips.forEach((tooltip) => {
        tooltip.remove()
      })
    })

    window.addEventListener('resize', this.handleResize)
    if (this.notHover) {
      window.addEventListener('mousedown', this.handleMouseDownNotHover)
    }

    window.addEventListener('touchstart', this.handleMouseDownNotHover)
  }

  beforeDestroy() {
    this.activeTooltip = false
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('mousedown', this.handleMouseDownNotHover)
  }

  public render(h: any): VNode {
    const loading = h('div', {
      staticClass: 'vs-tooltip__loading',
    })

    const tooltip = h('div', {
      staticClass: 'vs-tooltip',
      ref: 'tooltip',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        {
          top: !this.bottom && !this.left && !this.right,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          shadow: this.shadow,
          notArrow: this.notArrow,
          square: this.square,
          circle: this.circle,
          border: this.border,
          borderThick: this.borderThick,
          loading: this.loading
        },
        // colors
        { [`vs-component--primary`] : !!this.primary },
        { [`vs-component--danger`] : !!this.danger },
        { [`vs-component--warn`] : !!this.warn },
        { [`vs-component--success`] : !!this.success },
        { [`vs-component--dark`] : !!this.dark },
      ],
      on: {
        mouseenter: () => {
          if (this.interactivity) {
            this.isHoverTooltip = true
            this.handlerMouseEnter()
          }
        },
        mouseleave: () => {
          this.isHoverTooltip = false
          this.removeTooltip()
        }
      }
    }, [
      this.$slots.tooltip,
      this.loading && loading
    ])

    return h('div', {
      staticClass: 'vs-tooltip-content',
      ref: 'content',
      on: {
        mouseenter: () => {
          if (!this.notHover) {
            this.handlerMouseEnter()
          }
        },
        mouseleave: () => {
          if (!this.notHover) {
            if (this.interactivity) {
              setTimeout(() => {
                if (!this.isHoverTooltip) {
                  this.removeTooltip()
                }
              }, 250)
            } else {
              this.removeTooltip()
            }
          }
        }
      }
    }, [
      h('transition', {
        props: {
          name: 'vs-tooltip'
        },
      }, [
        this.activeTooltip && tooltip,
      ]),
      this.$slots.default
    ])
  }
}
