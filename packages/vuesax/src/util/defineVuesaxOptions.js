import { setColor } from './index';
var defineColors = function (colors) {
    Object.keys(colors).forEach(function (item) {
        setColor(item, colors[item], document.body);
    });
};
export var defineVuesaxOptions = function (options) {
    console.log(options);
    if (!!options.colors) {
        defineColors(options.colors);
    }
};
