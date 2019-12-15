import './style.sass';
import component from './VsButtonGroup';
component.install = function (vue) {
    vue.component('vs-button-group', component);
};
if (typeof window !== 'undefined' && window.Vue) {
    component.install(window.Vue);
}
export default component;
