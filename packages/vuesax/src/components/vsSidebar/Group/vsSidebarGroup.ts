import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsSidebarGroup extends VsComponent {

  group: boolean = true
  openState: boolean = false

  @Prop({type: Boolean}) open: boolean

  @Watch('open')
  handleOpen(val: boolean) {
    this.$nextTick(() => {
      const h = (this.$refs.content as any).scrollHeight
      const parent: any = this.$parent
      if (parent.group) {
        if (val) {
          parent.$refs.content.style.height = `${parent.$refs.content.scrollHeight + h - 1}px`
        } else {
          parent.$refs.content.style.height = `${parent.$refs.content.scrollHeight - h + 1}px`
        }
      }
    })
  }

  handleClickItem(id: string) {
    (this.$parent as any).handleClickItem(id)
  }

  get getValue() {
    return (this.$parent as any).getValue
  }

  beforeEnter(el: any) {
    el.style.height = 0
  }

  enter(el: any, done: any) {
    const h = el.scrollHeight
    el.style.height = h - 1 + 'px'

    done()
  }

  leave(el: any, done: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  mounted() {
    if (this.$el.querySelector('.active') || this.open) {
      this.openState = true
    }
  }

  public render(h: any): VNode {
    const header = h('div', {
      staticClass: 'vs-sidebar__group__header',
      on: {
        click: () => {
          this.openState = !this.openState
        }
      }
    }, [
      this.$slots.header
    ])

    const content = h('div', {
      staticClass: 'vs-sidebar__group__content',
      ref: 'content',
      directives: [
        {
          name: 'show',
          value: this.openState
        }
      ]
    }, [
      this.$slots.default
    ])

    const transition = h('transition', {
      on: {
        beforeEnter: this.beforeEnter,
        enter: this.enter,
        leave: this.leave
      },
    }, [content])

    return h('div', {
      staticClass: 'vs-sidebar__group',
      class: {
        open: this.openState
      }
    }, [
      header,
      transition
    ])
  }
}
