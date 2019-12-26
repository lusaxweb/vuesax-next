import './style.sass';
import component from './VsAlert';
component.install = function (vue) {
    vue.component('vs-alert', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
