import { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsCard extends VsComponent {

  @Prop({ default: '1', type: [String, Boolean] }) type: string | number

  public render(h: any): VNode {
    const title = h('div', {
      staticClass: 'vs-card__title'
    }, [
      this.$slots.title
    ])

    const text = h('div', {
      staticClass: 'vs-card__text'
    }, [
      this.$slots.title && title,
      this.$slots.text
    ])

    const buttons = h('div', {
      staticClass: 'vs-card__buttons'
    }, [
      this.$slots.buttons
    ])

    const interactions = h('div', {
      staticClass: 'vs-card__interactions'
    }, [
      this.$slots.interactions
    ])

    const img = h('div', {
      staticClass: 'vs-card__img'
    }, [
      this.$slots.img,
      this.$slots.interactions && interactions
    ])

    const card = h('div', {
      staticClass: 'vs-card',
      on: {
        ...this.$listeners
      }
    }, [
      this.$slots.img && img,
      // this.type != 2 ? this.$slots.title : false && title,
      this.$slots.text && text,
      this.$slots.buttons && buttons
    ])

    return h('div', {
      staticClass: 'vs-card-content',
      class: [
        `type-${this.type}`
      ]
    }, [
      card
    ])
  }
}
