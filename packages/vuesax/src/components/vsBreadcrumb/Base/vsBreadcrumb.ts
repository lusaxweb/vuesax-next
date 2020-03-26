import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'
import { setColor } from '../../../util/index'

@Component
export default class VsBreadcrumb extends VsComponent {
  @Prop({ default: (): any => [], type: Array }) items: any[]

  @Prop({ default: '/', type: String }) separator: string

  @Prop({ default: 'primary', type: String }) color: string

  @Prop({ default: 'left', type: String }) align: string

  @Watch('color')
  handleColor() {
    setColor('breadcrumb', this.color , this.$el)
    this.$el.classList.add('vs-change-color-breadcrumb')
  }

  mounted() {
    setColor('breadcrumb', this.color , this.$el)
  }

  public render(h: any): VNode {
    const li = this.items.map(((item: any, i: number) => {
      return h('li', {
        staticClass: '',
        class: [
          item.disabled ? 'disabled-link' : null, item.active ? 'vs-active' : null
        ]
      }, [
        h(item.url ? 'a' : 'span', {
          staticClass: item.url ? 'vs-breadcrumb-link' : 'vs-breadcrumb--text',
          class: [
            item.url ? 'vs-breadcrumb-link' : 'vs-breadcrumb--text'
          ],
          attrs: {
            title: item.url ? item.title : null,
            href: item.url || '#',
            style: item.active ? 'color: rgb(var(--vs-color));' : null,
            'aria-current': item.active ? 'page' : null
          },
        }, [ item.title ]),
        i < (this.items.length - 1) ? h('span', {
          staticClass: 'separator notranslate vs-breadcrumb--separator',
          class: [
            this.separator.length > 1 ? 'material-icons' : null
          ],
          attrs: {
            translate: 'no',
            'aria-hidden': 'true'
          },
        }, [ this.separator ]) : null
      ])
    }))

    const ol = h('ol', {
      staticClass: 'vs-breadcrumb--ol',
    }, [
      li
    ])

    return h('nav', {
      staticClass: 'vs-breadcrumb',
      attrs: {
        ...this.$attrs,
        'aria-label': 'breadcrumb'
      },
      class: [
        `vs-align-${this.align}`
      ]
    }, [
      this.$slots.default || ol
    ])
  }
}
