import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsIconsClose from '../../../icons/close'
import VsComponent from '../../../mixins/component'
import { insertBody } from '../../../util/index'

@Component
export default class VsDialog extends VsComponent {
  rebound: boolean = false

  @Prop({ default: false, type: Boolean }) value: boolean

  @Prop({ default: false, type: Boolean }) loading: boolean

  @Prop({ default: false, type: Boolean }) fullScreen: boolean

  @Prop({ default: false, type: Boolean }) notClose: boolean

  @Prop({ default: false, type: Boolean }) preventClose: boolean

  @Prop({ default: false, type: Boolean }) notPadding: boolean

  @Prop({ default: false, type: Boolean }) overflowHidden: boolean

  @Prop({ default: false, type: Boolean }) blur: boolean

  @Prop({ default: false, type: Boolean }) square: boolean

  @Prop({ default: false, type: Boolean }) autoWidth: boolean

  @Prop({ default: false, type: Boolean }) scroll: boolean

  @Prop({ default: false, type: Boolean }) notCenter: boolean

  @Prop({ default: null, type: String }) width: string

  @Prop({ default: false, type: Boolean }) routerClose: boolean

  esc(evt: any) {
    if (evt.which == 27 && !this.preventClose) {
      this.$emit('input', false)
      this.$emit('close')
    }
  }

  addEsc() {
    window.addEventListener('keydown', this.esc)
  }

  insertDialog() {
    this.addEsc()
    this.$nextTick(() => {
      const dialog = this.$refs['dialog-content'] as HTMLElement
      insertBody(dialog, document.querySelector('#app'))
    })
  }

  @Watch('value')
  handleWatchValue(val: boolean) {
    if (val) {
      this.insertDialog()
      if (this.overflowHidden) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      if (this.overflowHidden) {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', this.esc)
      }
    }
  }

  beforeDestroy() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  public render(h: any): VNode {
    const header = h('header', {
      staticClass: 'vs-dialog__header'
    }, [
      this.$slots.header
    ])

    const content = h('div', {
      staticClass: 'vs-dialog__content',
      class: {
        notFooter: !this.$slots.footer
      }
    }, [
      this.$slots.default
    ])

    const footer = h('footer', {
      staticClass: 'vs-dialog__footer'
    }, [
      this.$slots.footer
    ])

    const close = h('button', {
      staticClass: 'vs-dialog__close',
      on: {
        click: (evt: any) => {
          this.$emit('input', !this.value)
          this.$emit('close')
        }
      }
    }, [
      h(VsIconsClose, {
        props: {
          hover: 'x'
        }
      })
    ])

    const loading = h('div', {
      staticClass: 'vs-dialog__loading',
    }, [
      h('div', {
        staticClass: 'vs-dialog__loading__load',
      })
    ])

    const dialog = h('div', {
      staticClass: 'vs-dialog',
      style: {
        width: this.width
      },
      class: {
        'vs-dialog--fullScreen': this.fullScreen,
        'vs-dialog--rebound': this.rebound,
        'vs-dialog--notPadding': this.notPadding,
        'vs-dialog--square': this.square,
        'vs-dialog--autoWidth': this.autoWidth,
        'vs-dialog--scroll': this.scroll,
        'vs-dialog--loading': this.loading,
        'vs-dialog--notCenter': this.notCenter,
      }
    }, [
      this.loading && loading,
      !this.notClose && close,
      this.$slots.header && header,
      content,
      this.$slots.footer && footer
    ])

    const dialogContent = h('div', {
      staticClass: 'vs-dialog-content',
      ref: 'dialog-content',
      class: {
        blur: this.blur,
        fullScreen: this.fullScreen,
      },
      on: {
        click: (evt: any) => {
          if (!evt.target.closest('.vs-dialog') && !this.preventClose) {
            this.$emit('input', !this.value)
            this.$emit('close')
          }

          if (this.preventClose && !evt.target.closest('.vs-dialog')) {
            this.rebound = true
            setTimeout(() => {
              this.rebound = false
            }, 300);
          }
        }
      }
    }, [
      dialog
    ])

    return h('transition', {
      props: {
        name: 'vs-dialog'
      },
    }, [this.value && dialogContent])
  }
}
