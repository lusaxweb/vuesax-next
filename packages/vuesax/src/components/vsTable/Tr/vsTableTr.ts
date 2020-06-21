import Vue, { CreateElement } from 'vue'
import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import expand from './vsTableExpand'
@Component
export default class VsTableTr extends VsComponent {
  @Prop({}) data: any
  @Prop({ type: Boolean, default: false }) isSelected: boolean
  @Prop({ type: Boolean, default: false }) notClickSelected: boolean
  @Prop({ type: Boolean, default: false }) openExpandOnlyTd: boolean
  expand: boolean = false
  instanceExpand: any = null

  insertAfter(element: any) {
    if (this.$el.nextSibling) {
      this.$el.parentNode.insertBefore(element, this.$el.nextSibling)
    } else {
      this.$el.parentNode.appendChild(element)
    }
  }

  @Watch('data')
  handleChangeData() {
    (this.$el as HTMLElement).style.removeProperty(`--vs-color`)
    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = true
      this.instanceExpand = null
      // this.expand = false
    }
  }

  handleClickHasExpand(h: CreateElement) {
    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = !this.instanceExpand.$data.hidden
      this.instanceExpand = null
      // this.expand = false
    } else {
      const colspan = this.$parent.$el.querySelectorAll('thead th').length
      const trExpand = Vue.extend(expand)
      this.instanceExpand = new trExpand()
      this.instanceExpand.$props.colspan = colspan
      this.instanceExpand.$slots.default = this.$slots.expand
      this.instanceExpand.vm = this.instanceExpand.$mount()
      this.instanceExpand.$data.hidden = false
      this.insertAfter(this.instanceExpand.vm.$el)
      // this.expand = true
    }
  }

  public render(h: any): VNode {
    return h('tr', {
      staticClass: 'vs-table__tr',
      on: {
        click: (evt: any) => {
          if (this.$slots.expand) {
            if (
              (this.openExpandOnlyTd ? evt.target.nodeName == 'TD' : true) &&
              !evt.target.className.includes('isEdit')) {
              this.handleClickHasExpand(h)
            }
          }

          if (evt.target.nodeName == 'TD' && !this.notClickSelected) {
            (this.$parent as any).selected(this.data)
            this.$emit('selected', this.data)
          }

          this.$emit('click', evt)
        }
      },
      class: {
        selected: this.isSelected,
        isExpand: !!this.instanceExpand,
        expand: this.$slots.expand
      }
    }, this.$slots.default)
  }
}
