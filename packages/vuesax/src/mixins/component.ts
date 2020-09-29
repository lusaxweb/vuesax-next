import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { getColor } from '../util/index'
@Component
export default class VsComponent extends Vue {
  static install: (vue: any) => void

  static use: (vue: any) => any

  componentColor: string = null
  getColor: any = null

  @Prop({ type: String, default: null }) color!: string

  @Prop({ type: Boolean, default: false }) danger!: boolean

  @Prop({ type: Boolean, default: false }) success!: boolean

  @Prop({ type: Boolean, default: false }) warn!: boolean

  @Prop({ type: Boolean, default: false }) dark!: boolean

  @Prop({ type: Boolean, default: false }) primary!: boolean

  @Prop({ type: Boolean, default: false }) active!: boolean

  // get getColor() {
  //   return getColor(this.color)
  // }

  get isColorDark() {
    return this.color === 'dark' || this.dark || this.componentColor === 'dark'
  }

  get isColor() {
    return !!this.color || !!this.primary || !!this.success || !!this.warn || !!this.danger || !!this.dark
  }

  mounted() {
    this.getColor = getColor(this.color)
  }
}
