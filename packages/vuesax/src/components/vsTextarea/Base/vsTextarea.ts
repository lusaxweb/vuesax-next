import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsTextarea extends VsComponent {
  isVisiblePassword: boolean = false

  @Prop({ default: '' }) value!: any
  @Prop({ default: '' }) labelPlaceholder!: any
  @Prop({ default: '' }) label!: any
  @Prop({ type: Boolean, default: false }) block!: boolean
  @Prop({ type: Boolean, default: false }) iconAfter!: boolean
  @Prop({ type: Boolean, default: false }) visiblePassword!: boolean
  @Prop({ type: Boolean, default: false }) loading!: boolean
  @Prop({ type: String, default: null }) color!: string
  @Prop({ type: String, default: null }) state!: string
  @Prop({ type: Number, default: 0 }) progress!: number
  @Prop({ type: Boolean, default: false }) border!: boolean
  @Prop({ type: Boolean, default: false }) shadow!: boolean
  @Prop({ type: Boolean, default: false }) transparent!: boolean
  @Prop({ type: Boolean, default: false }) textWhite!: boolean
  @Prop({ type: Boolean, default: false }) square!: boolean

  // tslint:disable-next-line:variable-name
  _uid: any

  get getId() {
    return `vs-textarea--${this.$attrs.id || this._uid}`
  }

  get hasColor() {
    return (this.color || this.primary || this.danger || this.success || this.dark || this.warn)
  }

  beforeEnter(el: any) {
    el.style.height = 0
  }

  enter(el: any, done: any) {
    let h = el.scrollHeight
    el.style.height = h - 1 + 'px'
    done()
  }

  leave(el: any, done: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  getMessage(type: string) {
    return this.$createElement('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [
      !!this.$slots[`message-${type}`] && this.$createElement('div', {
        staticClass: 'vs-textarea__message',
        class: [`vs-textarea__message--${type}`]
      }, [
        this.$slots[`message-${type}`]
      ])
    ])
  }

  public render(h: any): VNode {

    const textarea = h('textarea', {
      staticClass: 'vs-textarea',
      domProps: {
        value: this.value
      },
      class: [
        { ['vs-textarea--has-icon']: !!this.$slots.icon },
        { ['vs-textarea--has-icon--after']: !!this.iconAfter }
      ],
      on: {
        ...this.$listeners,
        input: (evt: any) => {
          this.$emit('input', evt.target.value)
        }
      },
      attrs: {
        ...this.$attrs,
        placeholder: '',
        id: this.getId,
      }
    })

    const label = h('label', {
      attrs: {
        for: this.getId
      },
      class: [
        'vs-textarea__label',
        { 'vs-textarea__label--placeholder': this.labelPlaceholder },
        { 'vs-textarea__label--hidden': this.value !== '' || this.$attrs.type == 'date' || this.$attrs.type == 'time' },
        { 'vs-textarea__label--label': this.label }
      ],
    }, [
      this.label || this.$attrs.placeholder || this.labelPlaceholder
    ])

    const placeholder = h('label', {
      attrs: {
        for: this.getId
      },
      class: [
        'vs-textarea__label',
        { 'vs-textarea__label--hidden': this.value !== '' },
      ],
    }, [
      this.$attrs.placeholder
    ])

    const icon = h('span', {
      staticClass: 'vs-textarea__icon',
      class: [
        { 'vs-textarea__icon--after': this.iconAfter },
        { 'vs-textarea__icon--click': !!this.$listeners['click-icon'] }
      ],
      on: {
        click: (evt: any) => {
          this.$emit('click-icon', evt.target.value)
        }
      },
    }, [
      this.$slots.icon
    ])

    const messageSuccess = this.getMessage('success')

    const messageDanger = this.getMessage('danger')

    const messageWarn = this.getMessage('warn')

    const messagePrimary = this.getMessage('primary')

    const progressBar = h('div', {
      staticClass: 'vs-textarea__progress',
      class: [
        { 'vs-textarea__progress--danger': this.progress < 33 },
        { 'vs-textarea__progress--warn': this.progress < 66 && this.progress > 33 },
        { 'vs-textarea__progress--success': this.progress > 66 }
      ]
    }, [
      h('div', {
        staticClass: 'vs-textarea__progress__bar',
        style: {
          width: `${this.progress}%`
        },
      })
    ])

    const loading = h('div', {
      staticClass: 'vs-textarea__loading',
    })

    const effects = h('div', {
      staticClass: 'vs-textarea__affects',
    }, [
      h('div', {
        staticClass: 'vs-textarea__affects__1',
      }),
      h('div', {
        staticClass: 'vs-textarea__affects__2',
      }),
      h('div', {
        staticClass: 'vs-textarea__affects__3',
      }),
      h('div', {
        staticClass: 'vs-textarea__affects__4',
      })
    ])

    const textareaContent = h('div', {
      staticClass: 'vs-textarea-content',
      class: [
        { [`vs-textarea-content--has-color`]: this.hasColor },
        { [`vs-textarea-content--has-label`]: this.label || this.labelPlaceholder }
      ]
    }, [
      textarea,
      this.label && placeholder,
      label,
      this.$slots.icon && icon,
      this.loading && loading,
      effects
    ])

    return h('div', {
      staticClass: 'vs-textarea-parent',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        `vs-textarea-parent--state-${this.state}`,
        { 'vs-textarea-parent--border': !!this.border },
        { 'vs-textarea-parent--shadow': !!this.shadow },
        { [`vs-textarea-content--has-label`]: this.label || this.labelPlaceholder },
        { block: this.block },
        { transparent: this.transparent },
        { textWhite: this.textWhite },
        { square: this.square },

        // colors
        { [`vs-component--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
        { [`vs-component--danger`] : !!this.danger },
        { [`vs-component--warn`] : !!this.warn },
        { [`vs-component--success`] : !!this.success },
        { [`vs-component--dark`] : !!this.dark },
        { [`vs-component--is-color`] : !!this.isColor },
      ]
    }, [
      textareaContent,
      this.progress > 0 && progressBar,
      messageSuccess,
      messageDanger,
      messageWarn,
      messagePrimary
    ])
  }
}
