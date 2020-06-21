import * as _ from 'lodash'
import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsTable extends VsComponent {
  colspan: number = 0
  @Prop({}) value: any
  @Prop({ default: false, type: Boolean }) striped: any
  @Prop({ default: false, type: Boolean }) loading: boolean
  // @Prop({ default: false, type: Boolean }) multiple: boolean

  mounted() {
    const tds = (this.$refs as any).thead.querySelectorAll('th')
    this.colspan = tds.length
  }

  get isMultipleSelected() {
    return _.isArray(this.value)
  }

  selected(val: any) {
    if (this.isMultipleSelected) {
      this.selectedMultiple(val)
    } else {
      this.$emit('input', val)
    }
  }

  selectedMultiple(val: any) {
    const newVal = this.value
    if (this.value.includes(val)) {
      newVal.splice(this.value.indexOf(val), 1)
    } else {
      newVal.push(val)
    }

    this.$emit('input', newVal)
  }

  public render(h: any): VNode {
    const footer = h('footer', {
      staticClass: 'vs-table__footer'
    }, [
      this.$slots.footer
    ])

    const header = h('header', {
      staticClass: 'vs-table__header'
    }, [
      this.$slots.header
    ])

    const thead = h('thead', {
      ref: 'thead',
      staticClass: 'vs-table__thead'
    }, [
      this.$slots.thead
    ])

    const notFound = h('tbody', {
      staticClass: 'vs-table_not-found'
    }, [
      h('tr', [
        h('td', {
          attrs: {
            colspan: this.colspan
          }
        }, [
           this.$slots.notFound || 'No matching records found'
        ])
      ])
    ])

    const tbody = h('tbody', {
      staticClass: 'vs-table__tbody'
    }, [
      this.$slots.tbody,
    ])

    const table = h('div', {
      staticClass: 'vs-table',
      class: {
        isSelectedValue: this.value,
        striped: this.striped,
        isMultipleSelected: this.isMultipleSelected
      }
    }, [
      h('table', {}, [
        thead,
        tbody,
        notFound
      ])
    ])

    return h('div', {
      staticClass: 'vs-table-content',
    }, [
      this.$slots.header && header,
      table,
      this.$slots.footer && footer
    ])
  }
}
