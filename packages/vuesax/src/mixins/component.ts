import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { setColor } from '../util/index'
@Component
export default class VsComponent extends Vue {
  static install: (vue: any) => void

  static use: (vue: any) => any

  componentColor: string = null

  @Prop({ type: String, default: null }) color!: string

  @Prop({ type: Boolean, default: false }) danger!: boolean

  @Prop({ type: Boolean, default: false }) success!: boolean

  @Prop({ type: Boolean, default: false }) warn!: boolean

  @Prop({ type: Boolean, default: false }) dark!: boolean

  @Prop({ type: Boolean, default: false }) primary!: boolean

  @Prop({ type: Boolean, default: false }) active!: boolean

  get isColorDark() {
    return this.color === 'dark' || this.dark || this.componentColor === 'dark'
  }

  changeColor() {
    if (!this.$el || this.$el.nodeName == '#comment') { return }
    this.componentColor = (this.danger && 'danger') ||
    (this.success && 'success') ||
    (this.warn && 'warn') ||
    (this.dark && 'dark') ||
    (this.primary && 'primary')
    if (this.color || this.componentColor) {
      setColor('color', this.componentColor || this.color || 'primary', this.$el, true)

      if (this.$refs.options) {
        setColor('color', this.componentColor || this.color || 'primary', this.$refs.options, true)
      }

      if (this.$refs.tooltip) {
        setColor('color', this.componentColor || this.color || 'primary', this.$refs.tooltip, true)
      }
    }
    if (this.componentColor == 'dark' || this.color == 'dark') {
      this.$el.classList.add('vs-component-dark')
    } else {
      this.$el.classList.remove('vs-component-dark')
    }

    if (this.componentColor == 'white') {
      this.$el.classList.add('vs-component-white')
    } else {
      this.$el.classList.remove('vs-component-white')
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
