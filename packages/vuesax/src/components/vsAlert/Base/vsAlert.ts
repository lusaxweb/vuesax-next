import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsAlert extends VsComponent {
  @Prop({ type: Boolean, default: false }) public solid!: boolean

  @Prop({ type: Boolean, default: false }) public border!: boolean

  @Prop({ type: Boolean, default: false }) public shadow!: boolean

  @Prop({ type: Boolean, default: false }) public gradient!: boolean

  @Prop({ type: Boolean, default: false }) public flat!: boolean

  @Prop({ type: Boolean, default: false }) public relief!: boolean

  @Prop({ default: true }) public value!: any

  @Prop({ type: Boolean, default: false }) public hiddenContent!: boolean

  @Prop({ type: Boolean, default: false }) public closable!: boolean

  @Prop({ type: [Number, String], default: 0 }) public progress!: number | string

  @Watch('hiddenContent')
  public handleHiddenContent(val: boolean) {
    if (!this.value) {
      return
    }
    const el = (this.$el as HTMLElement)
    const content = (this.$refs.content as HTMLElement)
    if (!val) {
      el.style.height = 'auto'
      setTimeout(() => {
        el.style.height = this.$el.scrollHeight - 1 + 'px'
      }, 250)
    } else {
      el.style.height = this.$el.scrollHeight - content.scrollHeight + 'px'
    }
  }

  public beforeEnter(el: any) {
    el.style.height = 0
  }

  public enter(el: any, done: any) {
    let h = el.scrollHeight
    el.style.height = h - 1 + 'px'
    done()
  }

  public leave(el: any, done: any) {
    el.style.height = '0px'
  }

  public handleClickClose() {
    this.$emit('input', !this.value)
  }

  public mounted() {
    const el = (this.$el as HTMLElement)
    el.style.height = this.$el.scrollHeight - 1 + 'px'
  }

  public render(h: any): VNode {
    const icon = h('div', {
      staticClass: 'vs-alert__icon',
      ref: 'icon'
    }, [this.$slots.icon])

    const contentText = h('div', {
      staticClass: 'vs-alert__content__text',
      ref: 'text'
    }, [this.$slots.default])

    const content = h('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [ !this.hiddenContent &&
      h('div', {
        staticClass: 'vs-alert__content',
        ref: 'content'
      }, [contentText])
    ])

    const title = h('div', {
      staticClass: 'vs-alert__title',
    }, this.$slots.title)

    const closeBtn = h('button', {
      staticClass: 'vs-alert__close',
      on: {
        click: this.handleClickClose
      } 
    }, this.$slots.close)

    const footer = h('div', {
      staticClass: 'vs-alert__footer',
    }, this.$slots.footer)

    const progress = h('div', {
      staticClass: 'vs-alert__progress',
    }, [
      h('div', {
        staticClass: 'vs-alert__progress__bar',
        style: {
          width: `${this.progress}%`
        }
      })
    ])

    const render = h('div', {
      staticClass: 'vs-alert',
      class: [
        { [`vs-alert--solid`] : !!this.solid },
        { [`vs-alert--border`] : !!this.border },
        { [`vs-alert--shadow`] : !!this.shadow },
        { [`vs-alert--gradient`] : !!this.gradient },
        { [`vs-alert--flat`] : !!this.flat },
        { [`vs-alert--relief`] : !!this.relief },
      ],
    }, [
      this.$slots.icon && icon,
      this.$slots.title && title,
      content,
      this.closable && closeBtn,
      this.$slots.footer && footer,
      !!this.progress && progress
    ])

    return h('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [this.value && render])
  }
}