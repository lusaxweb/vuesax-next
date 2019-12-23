import { setColor } from '../util/index';
export default (function (Vue) {
    var vsFunctions = {
        setColor: function (color, val) {
            setColor(color, val, document.body);
        }
    };
    Vue.prototype.$vs = vsFunctions;
});
