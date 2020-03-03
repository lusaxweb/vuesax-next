import Vue from 'vue';
import './style.sass'
import component from './VsNotification'

interface NotificationParams {
  title?: string
  text?: string
  position?: string
  color?: string
  border?: string
  icon?: string
  duration?: number | string
  onClick?: any
  buttonClose?: boolean
  flat?: boolean
  onDestroy?: any
  sticky?: boolean
  square?: boolean
  width?: string
  loading?: boolean
  progress?: any
  notPadding?: any
  content?: any
  clickClose?: boolean
  classNotification?: string
}

const notificationConstructor = Vue.extend(component)

// tslint:disable-next-line:only-arrow-functions
notificationConstructor.prototype.close = function() {
  this.isVisible = false
}

notificationConstructor.prototype.setLoading = function(val: boolean) {
  this.loading = val
}

notificationConstructor.prototype.changeProgress = function(val: number) {
  if (val) {
    this.progress = val
  }
}

notificationConstructor.prototype.toggleClass = function(val: number) {
  if (val) {
    this.classNotification = val
    this.$el.closest('.vs-notification-parent').classList.toggle(val)
  }
}

const notification = (params: NotificationParams = {}) => {
  const instance = new notificationConstructor()

  instance.$data.title = params.title
  instance.$data.text = params.text
  instance.$data.color = params.color
  instance.$data.colorName = params.color
  instance.$data.border = params.border
  instance.$data.icon = params.icon
  instance.$data.onClick = params.onClick
  instance.$data.flat = params.flat
  instance.$data.onDestroy = params.onDestroy
  instance.$data.sticky = params.sticky
  instance.$data.square = params.square
  instance.$data.width = params.width
  instance.$data.loading = params.loading
  instance.$data.notPadding = params.notPadding
  instance.$data.clickClose = params.clickClose
  instance.$data.classNotification = params.classNotification
  if (params.duration !== 'none') {
    instance.$data.duration = params.duration || 4000
  }
  if (params.progress == 'auto' && params.duration !== 'none') {
    instance.$data.progressAuto = true
  } else {
    instance.$data.progress = params.progress
  }
  if (typeof params.buttonClose == 'boolean') {
    instance.$data.buttonClose = params.buttonClose
  }

  if (params.width == '100%' || window.innerWidth < 600) {
    if (params.position === 'top-left' || params.position === 'top-right') {
      params.position = 'top-center'
    } else if (params.position === 'bottom-left' || params.position === 'bottom-right' || !params.position) {
      params.position = 'bottom-center'
    }
  }

  if (typeof params.position !== 'string') {
    params.position = 'bottom-right'
  }

  const parent: HTMLElement =
  document.querySelector(`.vs-notification-parent--${params.position || 'bottom-right'}`) || document.createElement('div')

  if (!document.querySelector(`.vs-notification-parent--${params.position || 'bottom-right'}`)) {
    parent.className = 'vs-notification-parent'
    parent.classList.add(`vs-notification-parent--${params.position || 'bottom-right'}`)
  }

  if (params.classNotification) {
    parent.classList.add(params.classNotification)
  }

  parent.appendChild(instance.$mount().$el)

  document.body.appendChild(parent)

  Vue.nextTick(() => {
    instance.$data.isVisible = true
    instance.$data.content = params.content
  })

  if (params.duration !== 'none') {
    setTimeout(() => {
      (instance as any).close()
    }, Number(params.duration) || 4000)
  }

  return instance
}

export default notification
