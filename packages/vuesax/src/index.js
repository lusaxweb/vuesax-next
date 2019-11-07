import * as vsComponents from './components/index';
// import './styles/vuesax.sass'
var install = function (Vue) {
    // Components
    Object.values(vsComponents).forEach(function (vsComponent) {
        Vue.use(vsComponent);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
// export default install
export default install;
