import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { setColor } from '../util/index'
@Component
export default class VsComponent extends Vue {
  static install: (vue: any) => void

  static use: (vue: any) => any

  componentColor: string = null

  @Prop({ type: String, default: 'primary' }) color!: string

  @Prop({ type: Boolean, default: false }) danger!: boolean

  @Prop({ type: Boolean, default: false }) success!: boolean

  @Prop({ type: Boolean, default: false }) warn!: boolean

  @Prop({ type: Boolean, default: false }) dark!: boolean

  @Prop({ type: Boolean, default: false }) primary!: boolean

  @Prop({ type: Boolean, default: false }) active!: boolean

  changeColor() {
    this.componentColor = (this.danger && 'danger') ||
    (this.success && 'success') ||
    (this.warn && 'warn') ||
    (this.dark && 'dark') ||
    (this.primary && 'primary')

    setColor('color', this.componentColor || this.color || 'primary', this.$el)
    if(this.componentColor == 'dark') {
      this.$el.classList.add('vs-component-dark')
    } else {
      this.$el.classList.remove('vs-component-dark')
    }
  }

  @Watch('color')
  handleWatchColor() {
    this.changeColor()
  }

  @Watch('primary')
  handleWatchPrimary() {
    this.changeColor()
  }

  @Watch('danger')
  handleWatchDanger() {
    this.changeColor()
  }

  @Watch('success')
  handleWatchSuccess() {
    this.changeColor()
  }

  @Watch('warn')
  handleWatchWarn() {
    this.changeColor()
  }

  @Watch('dark')
  handleWatchDark() {
    this.changeColor()
  }

  updated() {
    this.changeColor()
  }

  mounted() {
    this.changeColor()
  }
}
