import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsIconsArrow from '../../../icons/arrow'
import VsIconsClose from '../../../icons/close'
import VsComponent from '../../../mixins/component'
import { insertBody, setCords } from '../../../util/index'

@Component
export default class VsSelect extends VsComponent {
  // @Provide()
  // select: any = this

  @Prop({}) value!: any

  @Prop({ type: Boolean, default: false }) multiple: boolean

  @Prop({ type: Boolean, default: false }) filter: boolean

  @Prop({ type: String, default: '' }) placeholder: string

  @Prop({ type: String, default: '' }) labelPlaceholder: string

  @Prop({ type: String, default: '' }) label: string

  @Prop({ type: Boolean, default: false }) disabled: boolean

  @Prop({ type: Boolean, default: false }) collapseChips: boolean

  @Prop({ type: Boolean, default: false }) loading!: boolean

  @Prop({ type: String, default: null }) state!: string

  @Prop({ type: Boolean, default: false }) block!: boolean

  renderSelect: boolean = false

  activeOptions: boolean = false

  valueLabel: any = null

  hoverOption: any = -1

  uids: any = []

  childOptions: any = []

  targetSelect: boolean = false

  targetSelectInput: boolean = false

  targetClose: boolean = false

  activeFilter: boolean = false

  textFilter: string = null

  childVisibles: number = 0

  _uid: any

  isSelect: boolean = true

  insertOptions() {
    const options = this.$refs.options as HTMLElement
    insertBody(options, document.body)
    setCords(options, this.$refs.select)
  }

  clickOption(value: any, label: any) {
    if (this.multiple) {
      const oldVal = [...this.value]
      if (oldVal.indexOf(value) == -1) {
        oldVal.push(value)
      } else {
        oldVal.splice(oldVal.indexOf(value), 1)
      }
      this.$emit('input', oldVal)
    } else {
      this.$emit('input', value)
      this.valueLabel = label
    }

    setTimeout(() => {
      if (this.multiple && this.activeOptions) {
        (this.$refs.chips as HTMLElement).focus()
      }
    }, 10)
    if (!this.multiple) {
      this.handleBlur()
    }
  }

  setHover() {
    let index: number = -1
    this.childOptions.forEach((item: any, i: number) => {
      if (item.value == this.value) {
        index = i
      }
    })

    this.hoverOption = index
  }

  getValue() {
    const options = this.childOptions

    const filterOptions = options.filter((option: any): boolean => {
      return typeof this.value == 'number' ? this.value == option.value : this.value.indexOf(option.value) !== -1
    })

    const label: any[] = []
    filterOptions.forEach((item: any) => {
      label.push({
        label: (item as any).label,
        value: (item as any).value
      })
    })

    label.sort((a, b) => {
      return this.value.indexOf(a.value) - this.value.indexOf(b.value);
    })

    this.valueLabel = label
  }

  get getValueLabel() {
    const valueLabel = this.valueLabel
    let labels: any[] = []
    if (Array.isArray(valueLabel)) {
      valueLabel.forEach((item: any) => {
        labels.push(item.label)
      })
    } else {
      labels = valueLabel
    }

    return labels
  }

  handleBlur() {
    this.$nextTick(() => {
      this.activeOptions = false
    })
    this.$emit('blur')
    this.setHover()
    window.removeEventListener('click', this.handleWindowClick)
    if (this.activeOptions) {
      this.textFilter = ''
      if (!this.multiple) {
        this.activeFilter = false
      }
    }
  }

  get getChips() {
    const chip = (item: any, isCollapse: boolean): VNode => {
      return this.$createElement('span', {
        staticClass: 'vs-select__chips__chip',
        attrs: {
          'data-value': item.value
        },
        class: [
          {
            isCollapse
          }
        ]
      }, [
        item.label,
        !isCollapse && this.$createElement('span', {
          staticClass: 'vs-select__chips__chip__close',
          on: {
            click: () => {
              setTimeout(() => {
                this.targetClose = false;
              }, 100);
              if (!this.activeOptions) {
                (this.$refs.chips as HTMLElement).blur();
                if (this.filter) {
                  (this.$refs.chips_input as HTMLElement).blur()
                }
              }
              this.clickOption(item.value, item.label)
            },
            mouseleave: () => {
              this.targetClose = false
            },
            mouseenter: () => {
              this.targetClose = true
            }
          },
        }, [this.$createElement(VsIconsClose, {
          props: {
            hover: 'less'
          }
        })])
      ])
    }

    let chips: any[] = []
    if (Array.isArray(this.valueLabel)) {
      this.valueLabel.forEach((item: any) => {
        chips.push(chip(item, false))
      })
    }

    if (this.collapseChips) {
      chips = [chips[0], chips.length > 1 && chip({ label: `+${chips.length - 1}`, value: null }, true)]
    }

    return chips
  }

  blur(evt: any) {
    if (!this.multiple) {
      this.handleBlur()
    } else {
      if (!evt.relatedTarget) {
        this.handleBlur()
      } else if (
        !this.targetSelectInput || !this.targetSelect && !this.activeOptions
      ) {
        this.handleBlur()
      }
    }
    if (this.filter) {
      this.activeFilter = false
    }
  }

  handleKeydown(evt: any) {
    const options = this.$refs.options as HTMLElement
    for (let index = 0; index < 300; index++) {
      setTimeout(() => {
        setCords(options, this.$refs.select)
      }, index);
    }
    if (evt.code == 'ArrowDown') {
      evt.preventDefault()
      if (this.hoverOption < this.childOptions.length - 1) {
        this.hoverOption++
      } else {
        this.hoverOption = 0
      }
    } else if (evt.code == 'ArrowUp') {
      evt.preventDefault()
      if (this.hoverOption > 0) {
        this.hoverOption--
      } else {
        this.hoverOption = this.childOptions.length - 1
      }
    } else if (evt.code == 'Enter') {
      evt.preventDefault()
      if (this.hoverOption !== -1) {
        if (!this.childOptions[this.hoverOption].disabled) {
            this.clickOption(this.childOptions[this.hoverOption].value, this.childOptions[this.hoverOption].label)
            if (!this.multiple) {
              this.handleBlur();
              (this.$refs.input as HTMLElement).blur()
            }
        }
      }
    }

    if (this.hoverOption !== -1) {
      (this.$refs.content as HTMLElement).scrollTop = this.childOptions[this.hoverOption].$el.offsetTop - 66
    }

  }

  get notData() {
    let childOptions: any[] = []

    this.$slots.default.forEach((option: any): any => {
      if (option.tag) {
        if (!option.componentInstance.hiddenOption) {
          childOptions.push(option)
        }
      }
    })

    childOptions = childOptions.filter((item) => {
      if (item.optionGroup) {
        return !item.componentInstance.hiddenOptionGroup
      }
      return true
    })

    return childOptions.length == 0
  }

  handleWindowClick(evt: any) {
    if (!this.targetSelectInput) {
      this.handleBlur()
    }

    if (this.filter && !this.activeOptions) {
      this.activeFilter = false
    }

    if (evt.target == this.$refs.input && this.activeOptions && !this.filter) {
      this.handleBlur()
      setTimeout(() => {
        (this.$refs.input as HTMLElement).blur()
      }, 100);
    }
  }

  handleResize() {
    const options = this.$refs.options as HTMLElement
    if (!options) { return }
    this.$nextTick(() => {
      setCords(options, this.$refs.select)
    })

    for (let index = 0; index < 300; index++) {
      setTimeout(() => {
        setCords(options, this.$refs.select)
      }, index);
    }
  }

  handleScroll() {
    const options = this.$refs.options as HTMLElement
    if (options) {
      setCords(options, this.$refs.select)
    }
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
        staticClass: 'vs-select__message',
        class: [`vs-select__message--${type}`]
      }, [
        this.$slots[`message-${type}`]
      ])
    ])
  }

  @Watch('textFilter')
  handleTextFilter(val: string) {
    if (val) {
      if (this.$refs.placeholder) {
        (this.$refs.placeholder as HTMLElement).style.transition = '0s'
      }
    } else {
      if (this.$refs.placeholder) {
        (this.$refs.placeholder as HTMLElement).style.transition = ''
      }
    }
  }

  @Watch('value')
  handleValue(val: string) {
    this.getValue()
    setTimeout(() => {
      this.$emit('change', val)
    }, 10)

    if (this.multiple) {
      this.$nextTick(() => {
        const h = (this.$refs.chips as HTMLElement).scrollHeight;
        (this.$refs.input as HTMLElement).style.height = `${h}px`
        const options = this.$refs.options as HTMLElement
        if (this.activeOptions) {
          this.$nextTick(() => {
            setCords(options, this.$refs.select)
          })
        }
      })
    }

    if (val) {
      if (this.$refs.placeholder) {
        (this.$refs.placeholder as HTMLElement).style.transition = '0s'
      }
    } else {
      if (this.$refs.placeholder) {
        (this.$refs.placeholder as HTMLElement).style.transition = ''
      }
    }
  }

  @Watch('activeOptions')
  handleActive(val: boolean) {
    this.$nextTick(() => {
      if (val) {
        this.insertOptions()
      }
    })

    this.uids = []
  }

  mounted() {
    this.getValue()
    this.renderSelect = true

    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  }

  beforeDestroy() {
    this.handleBlur()
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }

  public render(h: any): VNode {

    const options = h('transition', {
      props: {
        name: 'vs-select'
      },
    }, [ this.activeOptions && h('div', {
      staticClass: 'vs-select__options',
      ref: 'options',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [{
        isColorDark: this.isColorDark
      },
      // colors
      { [`vs-component--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
    ],
      on: {
        mouseleave: () => {
          this.targetSelect = false
          this.targetSelectInput = false
        },
        mouseenter: () => {
          this.targetSelect = true
          this.targetSelectInput = true
        }
      }
    }, [
        h('div', {
          staticClass: 'vs-select__options__content',
          ref: 'content'
        }, [
          this.notData && h('div', {
            staticClass: 'vs-select__options__content__not-data'
          }, [
            this.$slots.notData || 'No data available'
          ]),
          this.$slots.default
        ])
      ])
    ])

    const input = h('input', {
      attrs: {
        readonly: !this.filter && true,
        id: !this.multiple && this._uid
      },
      staticClass: 'vs-select__input',
      ref: 'input',
      domProps: {
        value: this.activeFilter ? this.textFilter : this.getValueLabel
      },
      class: [
        {
          multiple: this.multiple,
          simple: !this.multiple && !this.filter
        }
      ],
      on: {
        ...this.$listeners,
        keydown: this.handleKeydown,
        focus: (evt: Event) => {
          this.activeOptions = true
          this.$emit('focus', evt)
          if (this.filter) {
            this.activeFilter = true
          }
          window.addEventListener('mousedown', this.handleWindowClick)
        },
        // blur: this.blur,
        input: (evt: any) => {
          this.textFilter = evt.target.value
        }
      }
    }, this.$slots.default)

    const chips = h('button', {
      staticClass: 'vs-select__chips',
      ref: 'chips',
      on: {
        keydown: this.handleKeydown,
        focus: (evt: Event) => {
          if (!this.targetClose) {
            this.activeOptions = true
            this.$emit('focus', evt)
          }
          if (this.filter && this.multiple) {
            (this.$refs.chips_input as HTMLElement).focus()
          }
        },
        blur: this.blur
      }
    }, [
      ...this.getChips,
      this.filter && h('input', {
        staticClass: 'vs-select__chips__input',
        ref: 'chips_input',
        attrs:  {
          placeholder: this.placeholder,
          id: this._uid
        },
        domProps: {
          value: this.textFilter
        },
        on: {
          // keydown: this.handleKeydown,
          focus: (evt: Event) => {
            if (!this.targetClose) {
              this.activeOptions = true
              this.$emit('focus', evt)
            }
          },
          blur: this.blur,
          input: (evt: any) => {
            this.textFilter = evt.target.value
          }
        }
      })
    ])

    const icon = h(VsIconsArrow, {
      on: {
        click: () => {
          if (this.activeOptions) {
            this.activeOptions = false
          } else {
            (this.$refs.input as HTMLElement).focus()
          }
        }
      }
    })

    const label = h('label', {
      staticClass: 'vs-select__label',
      attrs: {
        for: this._uid
      },
      class: {
        'vs-select__label--placeholder': this.labelPlaceholder,
        'vs-select__label--label': this.label,
        'vs-select__label--hidden': this.value,
      }
    }, [this.labelPlaceholder || this.label])

    const placeholder = h('label', {
      staticClass: 'vs-select__label',
      ref: 'placeholder',
      attrs: {
        for: this._uid
      },
      class: {
        'vs-select__label--hidden': this.value || this.textFilter,
      }
    }, [this.placeholder])

    const loading = h('div', {
      staticClass: 'vs-select__loading',
    })

    const messageSuccess = this.getMessage('success')

    const messageDanger = this.getMessage('danger')

    const messageWarn = this.getMessage('warn')

    const messagePrimary = this.getMessage('primary')

    const selectContent = h('div', {
      staticClass: 'vs-select',
      ref: 'select',
      class: [
        `vs-select--state-${this.state}`,
        {
          'vs-select--disabled': this.disabled,
          'activeOptions': this.activeOptions,
          'loading': this.loading
        }
      ],
      on: {
        mouseleave: (evt: any) => {
          if (evt.relatedTarget !== this.$refs.options) {
            this.targetSelectInput = false
            this.targetSelect = false
          }
        },
        mouseenter: () => {
          this.targetSelectInput = true
        }
      }
    }, [
      input,
      (!this.multiple || this.label) && label,
      (!this.multiple && !this.labelPlaceholder) && placeholder,
      this.multiple && chips,
      options,
      this.loading && loading,
      icon
    ])

    return  h('div', {
      staticClass: 'vs-select-content',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [{
        block: this.block
      },
      // colors
      { [`vs-component--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
    ]
    }, [
      selectContent,
      messageSuccess,
      messageDanger,
      messageWarn,
      messagePrimary
    ])
  }
}
