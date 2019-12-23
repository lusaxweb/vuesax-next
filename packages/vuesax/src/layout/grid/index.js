import './style.sass';
import vsCol from './VsCol';
import vsRow from './VsRow';
vsCol.install = function (vue) {
    vue.component('vs-col', vsCol);
};
vsRow.install = function (vue) {
    vue.component('vs-row', vsRow);
};
if (typeof window !== 'undefined' && window.Vue) {
    vsCol.install(window.Vue);
    vsRow.install(window.Vue);
}
export { vsCol, vsRow };
