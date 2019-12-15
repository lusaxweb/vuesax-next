import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { setColor } from '../util/index'
@Component
export default class VsComponent extends Vue {
  // tslint:disable-next-line:member-access
  static install: (vue: any) => any
  // tslint:disable-next-line:member-access
  static use: (vue: any) => any

  @Prop({ type: String, default: 'primary' }) public color!: string

  @Prop({ type: Boolean, default: false }) public active!: boolean

  @Watch('color')
  public handleWatchColor() {
    setColor('color', this.color, this.$el)
  }

  public mounted() {
    if (this.color) {
      setColor('color', this.color, this.$el)
    }
  }
}
