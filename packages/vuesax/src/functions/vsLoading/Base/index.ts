import Vue from 'vue';
import './style.sass'
import component from './VsLoading'

interface LoadingParams {
  type?: string
  text?: string
  hidden?: boolean,
  color?: string,
  background?: string
  opacity?: string
  percent?: string
  progress?: string
  target?: any
  scale?: string
}

const loadingConstructor = Vue.extend(component)

// tslint:disable-next-line:only-arrow-functions
loadingConstructor.prototype.close = function() {
  this.isVisible = false
  document.body.style.overflowY = 'auto'
  setTimeout(() => {
    this.$destroy()
    this.$el.parentNode.removeChild(this.$el)
  }, 250);
}

loadingConstructor.prototype.changePercent = function(val: string) {
  if (val) {
    this.percent = val
  }
}

loadingConstructor.prototype.changeProgress = function(val: number) {
  if (val) {
    this.progress = val
  }
}

loadingConstructor.prototype.changeText = function(val: string) {
  if (val) {
    this.text = val
  }
}

const loading = (params: LoadingParams = {}) => {
  const instance = new loadingConstructor()

  if (typeof params.target === 'string' ) {
    params.target = document.querySelector(params.target)
    instance.$data.target = params.target
  } else if (params.target) {
    params.target = params.target.$el || params.target
    instance.$data.target = params.target
  } else {
    params.target = document.body
  }

  instance.$data.text = params.text
  instance.$data.color = params.color
  instance.$data.background = params.background
  instance.$data.opacity = params.opacity
  instance.$data.percent = params.percent
  instance.$data.type = params.type
  instance.$data.progress = params.progress
  instance.$data.scale = params.scale

  params.target.appendChild(instance.$mount().$el)
  document.body.style.overflowY = params.hidden && 'hidden'
  Vue.nextTick(() => {
    instance.$data.isVisible = true
  })

  return instance
}

export default loading
