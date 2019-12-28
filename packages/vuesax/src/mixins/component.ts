import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { setColor } from '../util/index'
@Component
export default class VsComponent extends Vue {
  // tslint:disable-next-line:member-access
  static install: (vue: any) => any
  // tslint:disable-next-line:member-access
  static use: (vue: any) => any

  public componentColor: string = null

  @Prop({ type: String, default: 'primary' }) public color!: string

  @Prop({ type: Boolean, default: false }) public danger!: boolean

  @Prop({ type: Boolean, default: false }) public success!: boolean

  @Prop({ type: Boolean, default: false }) public warn!: boolean

  @Prop({ type: Boolean, default: false }) public dark!: boolean

  @Prop({ type: Boolean, default: false }) public active!: boolean

  public changeColor() {
    this.componentColor = (this.danger && 'danger') ||
    (this.success && 'success') ||
    (this.warn && 'warn') ||
    (this.dark && 'dark')

    setColor('color', this.componentColor || this.color || 'primary', this.$el)
  }

  @Watch('color')
  public handleWatchColor() {
    this.changeColor()
  }

  @Watch('danger')
  public handleWatchDanger() {
    this.changeColor()
  }

  @Watch('success')
  public handleWatchSuccess() {
    this.changeColor()
  }

  @Watch('warn')
  public handleWatchWarn() {
    this.changeColor()
  }

  @Watch('dark')
  public handleWatchDark() {
    this.changeColor()
  }

  public mounted() {
    this.changeColor()
  }
}
