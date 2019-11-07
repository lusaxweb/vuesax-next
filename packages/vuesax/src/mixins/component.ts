import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { setColor } from '../util/index'
@Component
export default class VsComponent extends Vue {
  // tslint:disable-next-line:member-access
  static install: (vue: any) => any

  @Prop({ type: String, default: '' }) public color!: string

  public use = (vue: any) => {
    console.log(vue)
    console.log(this)
  }

  public mounted() {
    if (this.color) {
      setColor('color', this.color, this.$el)
    }
  }
}
