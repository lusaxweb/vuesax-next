// import Vuesax from '../vuesax/src/index.js'
import 'boxicons/css/boxicons.min.css'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  // options, // the options for the root Vue instance
  // router, // the router instance for the app
  // siteData // site metadata
}) => {
  // ...apply enhancements to the app
  // Vue.use(Vuesax)
  Vue.prototype.$vsTheme = {
    mobileActive: false,
    openCode: false,
    themeDarken: false,
    sidebarCollapseOpen: true,
    sidebarCollapseOpen: true,
  }

  Vue.prototype.$codesandbox = {
    url: null
  }
}
