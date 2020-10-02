import { VNode } from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import VsComponent from '../../../mixins/component'

@Component
export default class VsNavbar extends VsComponent {

  @Prop({ default: false, type: Boolean }) fixed: boolean
  @Prop({ default: false, type: Boolean }) shadow: boolean
  @Prop({ default: false, type: Boolean }) shadowScroll: boolean
  @Prop({ default: false, type: Boolean }) hideScroll: boolean
  @Prop({ default: false, type: Boolean }) textWhite: boolean
  @Prop({ default: false, type: Boolean }) square: boolean
  @Prop({ default: false, type: Boolean }) paddingScroll: boolean
  @Prop({ default: false, type: Boolean }) notLine: boolean
  @Prop({ default: false, type: Boolean }) leftCollapsed: boolean
  @Prop({ default: false, type: Boolean }) centerCollapsed: boolean
  @Prop({ default: false, type: Boolean }) rightCollapsed: boolean
  @Prop({ default: null }) targetScroll: any

  leftLine: number = 0
  widthLine: number = 0
  scrollTop: number = 0
  collapsedWidth: number = 0
  hidden: boolean = false
  shadowActive: boolean = false
  paddingScrollActive: boolean = false
  lineNotTransition: boolean = false
  collapsedForced: boolean = false

  @Watch('hideScroll')
  @Watch('paddingScroll')
  @Watch('shadowScroll')
  handleShadowScroll() {
    this.handleScroll()
  }

  setModel(id: string) {
    this.$emit('input', id)
  }

  setLeftLine(left: any, transition: boolean = true) {
    if (!transition) {
      this.lineNotTransition = true
    } else {
      this.lineNotTransition = false
    }
    this.$nextTick(() => {
      this.leftLine = left
    })
  }

  setWidthLine(width: any) {
    this.$nextTick(() => {
      this.widthLine = width
    })
  }

  scroll(evt: any) {
    const scrollTop = this.targetScroll ? document.querySelector(this.targetScroll).scrollTop : window.pageYOffset
    if (this.hideScroll) {
      if (Math.sign(scrollTop - this.scrollTop) === 1) {
        this.hidden = true
      } else {
        this.hidden = false
      }
    }

    if (this.shadowScroll) {
      if (scrollTop > 0) {
        this.shadowActive = true
      } else {
        this.shadowActive = false
      }
    }

    if (this.paddingScroll) {
      if (scrollTop > 0) {
        this.paddingScrollActive = true
      } else {
        this.paddingScrollActive = false
      }
    }
    this.scrollTop = scrollTop
  }

  handleScroll() {
    if (this.hideScroll || this.shadowScroll || this.paddingScroll) {
      if (this.targetScroll) {
        const scrollElement = document.querySelector(this.targetScroll)
        scrollElement.addEventListener('scroll', this.scroll)
      } else {
        window.addEventListener('scroll', this.scroll)
      }
    }
  }

  handleResize() {
    const active: HTMLElement = this.$el.querySelector('.vs-navbar__item.active')
    if (active) {
      this.setLeftLine(active.offsetLeft, false)
    } else {
      this.widthLine = 0
    }
    const navbar: any = this.$el

    if (this.leftCollapsed || this.centerCollapsed || this.rightCollapsed) {
      if (navbar.offsetWidth < this.collapsedWidth) {
        this.collapsedForced = true
      }
    }

    if (this.collapsedForced) {
      this.$emit('collapsed', true)
    } else {
      this.$emit('collapsed', false)
    }

    if (navbar.offsetWidth < this.collapsedWidth) {
      this.$emit('collapsed', true)
    } else {
      this.$emit('collapsed', false)
      this.collapsedForced = false
    }
  }

  mounted() {
    setTimeout(() => {
      const left: any = this.$refs.left
      const center: any = this.$refs.center
      const right: any = this.$refs.right
      this.collapsedWidth =  left.offsetWidth + center.offsetWidth + right.offsetWidth + 150
      const navbar: any = this.$el
      if (navbar.offsetWidth < this.collapsedWidth) {
        this.collapsedForced = true
        this.$emit('collapsed', true)
        this.widthLine = 0
        this.handleResize()
      }
    }, 150)

    this.handleScroll()
    window.addEventListener('resize', this.handleResize)
  }

  public render(h: any): VNode {
    const left = h('div', {
      staticClass: 'vs-navbar__left',
      ref: 'left'
    }, [
      this.$slots.left
    ])

    const center = h('div', {
      staticClass: 'vs-navbar__center',
      ref: 'center'
    }, [
      this.$slots.default
    ])

    const right = h('div', {
      staticClass: 'vs-navbar__right',
      ref: 'right'
    }, [
      this.$slots.right
    ])

    const line = h('div', {
      staticClass: 'vs-navbar__line',
      class: {
        notTransition: this.lineNotTransition
      },
      style: {
        left: `${this.leftLine}px`,
        width: `${this.widthLine}px`
      }
    })

    const navbar = h('div', {
      staticClass: 'vs-navbar'
    }, [
      (this.leftCollapsed ? !this.collapsedForced : true) && left,
      (this.centerCollapsed ? !this.collapsedForced : true) && center,
      (this.rightCollapsed ? !this.collapsedForced : true) && right
    ])

    return h('div', {
      staticClass: 'vs-navbar-content',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [{
        fixed: this.fixed,
        shadow: this.shadow,
        hidden: this.hidden,
        shadowActive: this.shadowActive,
        textWhite: this.textWhite,
        paddingScroll: this.paddingScroll,
        paddingScrollActive: this.paddingScrollActive,
        vsNavbarSquare: this.square,
      },
      // colors
      { [`vs-component--primary`] : !!this.primary },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
      { [`vs-component--is-color`] : !!this.isColor },
    ]
    }, [
      navbar,
      !this.notLine && line
    ])
  }
}
