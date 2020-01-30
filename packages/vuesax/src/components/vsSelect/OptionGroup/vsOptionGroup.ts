import { VNode } from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsOptionGroup extends VsComponent {
  optionGroup: boolean = true

  textFilter: string = null

  hiddenOptionGroup: boolean = false

  clickOption(value: any, label: any) {
    (this.$parent as any).clickOption(value, label)
  }
  get labels() {
    let labels: string = ''
    this.$slots.default.forEach((item) => {
      if (item.tag) {
        labels += (item.componentInstance as any).label
      }
    })
    return labels
  }

  @Watch('$parent.textFilter')
  handleTextFilter(val: string) {
    if (val) {
      if (this.labels.toLowerCase().indexOf(val.toLowerCase()) === -1) {
        this.hiddenOptionGroup = true
      } else {
        this.hiddenOptionGroup = false
      }
    } else {
      this.hiddenOptionGroup = false
    }
    this.textFilter = val
  }

  public render(h: any): VNode {
    return h('div', {
      staticClass: 'vs-select__option-group',
      class: [
        {
          hiddenOptionGroup: this.hiddenOptionGroup
        }
      ]
    },
      [
        h('h5', {}, this.$slots.title),
        this.$slots.default
      ]
    )
  }
}
