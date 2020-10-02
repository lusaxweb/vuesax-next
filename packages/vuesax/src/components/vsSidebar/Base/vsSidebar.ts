import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import { setColor } from '../../../util/index'

@Component
export default class VsSidebar extends VsComponent {

  @Prop({}) value: any
  @Prop({ default: false, type: Boolean }) reduce: boolean
  @Prop({ default: false, type: Boolean }) hoverExpand: boolean
  @Prop({ default: false, type: Boolean }) open: boolean
  @Prop({ default: false, type: Boolean }) notLineActive: boolean
  @Prop({ default: false, type: Boolean }) square: boolean
  @Prop({ default: false, type: Boolean }) textWhite: boolean
  @Prop({ default: false, type: Boolean }) notShadow: boolean
  @Prop({ default: false, type: Boolean }) relative: boolean
  @Prop({ default: false, type: Boolean }) absolute: boolean
  @Prop({ default: false, type: Boolean }) right: boolean
  @Prop({ default: 'background', type: String }) background: string

  staticWidth: number = 260
  forceExpand: boolean = false
  reduceInternal: boolean = false

  @Watch('open')
  handleOpen(val: boolean) {
    if (val) {
      setTimeout(() => {
        window.addEventListener('click', this.clickCloseSidebar)
      }, 200)
    } else {
      window.removeEventListener('click', this.clickCloseSidebar)
    }
  }
  @Watch('reduce')
  handleReduce(val: boolean) {
    this.reduceInternal = val
    const el: any = this.$el
    if (val) {
      el.style.width = '50px'
    } else {
      el.style.width = `${this.staticWidth}px`
    }
  }

  @Watch('reduceInternal')
  handleReduceInternal(val: boolean) {
    const el: any = this.$el
    if (val) {
      el.style.width = '50px'
    } else {
      el.style.width = `${this.staticWidth}px`
    }
  }

  @Watch('background')
  handleBackground() {
    setColor('background', this.background, this.$el, true)
  }

  get getValue() {
    return this.value
  }

  clickCloseSidebar(evt: any) {
    if (!(evt.target as any).closest('.vs-sidebar-content')) {
      this.$emit('update:open', false)
    }
  }

  handleClickItem(id: string) {
    this.$emit('input', id)
  }

  mounted() {
    this.staticWidth = (this.$el as HTMLElement).offsetWidth
    this.reduceInternal = this.reduce

    if (this.background !== 'background') {
      setColor('background', this.background, this.$el, true)
    }

    if (this.textWhite) {
      setColor('text', '#fff', this.$el, true)
    }
  }

  public render(h: any): VNode {
    const logo = h('div', {
      staticClass: 'vs-sidebar__logo'
    }, [
      this.$slots.logo
    ])

    const header = h('div', {
      staticClass: 'vs-sidebar__header'
    }, [
      this.$slots.header
    ])

    const footer = h('div', {
      staticClass: 'vs-sidebar__footer'
    }, [
      this.$slots.footer
    ])

    const sidebar = h('div', {
      staticClass: 'vs-sidebar',
    }, [
      this.$slots.default
    ])

    return h('div', {
      staticClass: 'vs-sidebar-content',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [{
        reduce: this.reduceInternal,
        open: this.open,
        notLineActive: this.notLineActive,
        square: this.square,
        notShadow: this.notShadow,
        textWhite: this.textWhite,
        relative: this.relative,
        absolute: this.absolute,
        right: this.right
      },
      // colors
      { [`vs-component--primary`] : !!this.primary },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
      { [`vs-component--is-color`] : !!this.isColor },
    ],
      on: {
        mouseenter: () => {
          if (this.hoverExpand) {
            this.reduceInternal = false
          }
        },
        mouseleave: () => {
          if (this.hoverExpand) {
            this.reduceInternal = true
          }
        }
      }
    }, [
      this.$slots.logo && logo,
      this.$slots.header && header,
      sidebar,
      this.$slots.footer && footer
    ])
  }
}
