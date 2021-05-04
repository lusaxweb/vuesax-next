import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsSwitch extends VsComponent {

  @Prop({ default: '' }) value: any

  @Prop({ default: '' }) val!: any

  @Prop({ default: '' }) notValue!: any

  @Prop({ type: Boolean, default: false }) loading!: boolean

  @Prop({ type: Boolean, default: false }) square!: boolean

  @Prop({ type: Boolean, default: false }) indeterminate!: boolean

  @Prop({ type: Boolean, default: false }) icon!: boolean

  get isChecked() {
    let isChecked = false

    if (this.value) {

      if (typeof this.value == 'boolean') {
        isChecked = this.value
      } else if (typeof this.value == 'object' && this.value !== null) {
        const array = this.value
        const containValue = array.indexOf(this.val) === -1 &&
        JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1
        let indexVal = 0

        array.forEach((item: any, index: number) => {
          if(JSON.stringify(item) == JSON.stringify(this.val)) {
            indexVal = index
          }
        })

        if (containValue) {
          return false
        } else {
          return true
        }
      }

    } else {
      isChecked = false
    }
    return isChecked
  }

  public render(h: any): VNode {
    const circle = h('div', {
      class: ['vs-switch__circle'],
    }, [
      this.$slots.circle
    ])

    const textOn = h('div', {
      ref: 'on',
      class: ['vs-switch__text', 'on'],
    }, [ this.$slots.on || this.$slots.default ])

    const textOff = h('div', {
      ref: 'off',
      class: ['vs-switch__text', 'off'],
    }, [ this.$slots.off || this.$slots.default ])

    const background = h('div', {
      class: ['vs-switch__background'],
    })

    const input = h('input', {
      attrs: {
        ...this.$attrs,
        type: 'checkbox',
      },
      domProps: {
        checked: this.isChecked
      },
      on: {
        ...this.$listeners,
        input: (evt: any) => {
          if (typeof this.value == 'boolean') {

              this.$emit('input', !this.value)

          } else if (typeof this.value == 'object' && this.value !== null) {

            const array = this.value
            const containValue = array.indexOf(this.val) === -1 &&
            JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1
            let indexVal = 0

            array.forEach((item: any, index: number) => {
              if(JSON.stringify(item) == JSON.stringify(this.val)) {
                indexVal = index
              }
            })

            if (containValue) {
              array.push(this.val)
            } else {
              array.splice(indexVal, 1)
            }

            this.$emit('input', array)

          } else {

            if (this.val !== this.value) {
              this.$emit('input', this.val)
            } else {
              this.$emit('input', this.notValue || null)
            }
          }
          this.$emit('change', evt)
        }
      },
      class: ['vs-switch__input'],
    })

    return h('div', {
      staticClass: 'vs-switch',
      attrs: {
        type: 'checkbox',
      },
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [{
        'vs-switch--loading': this.loading,
        'vs-switch--square': this.square,
        'vs-switch--indeterminate': this.indeterminate,
        'vs-switch--icon': this.icon,
      },
      { [`vs-component--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
    ],
    }, [
      input,
      circle,
      textOn,
      textOff,
      // !this.active && textOff,
      background
    ])
  }
}
