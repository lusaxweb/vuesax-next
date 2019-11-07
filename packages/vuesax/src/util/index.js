// import * as consolee from 'consolee'
var isColor = function (color) {
    var vsColors = [
        'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light',
        // social colors
        'facebook',
        'twitter',
        'youtube',
        'pinterest',
        'linkedin',
        'snapchat',
        'whatsapp',
        'tumblr',
        'reddit',
        'spotify',
        'amazon',
        'medium',
        'vimeo',
        'skype',
        'dribbble',
        'slack',
        'yahoo',
        'twitch',
        'discord',
        'telegram',
        'google-plus',
        'messenger'
    ];
    return vsColors.includes(color);
};
var setVar = function (propertyName, value, el) {
    if (!el) {
        document.documentElement.style.setProperty("--vs-" + propertyName, value);
    }
    else {
        el.style.setProperty("--vs-" + propertyName, value);
    }
};
var setColor = function (colorName, color, el) {
    function hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            // tslint:disable-next-line:object-literal-sort-keys
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    var isRGB = /^(rgb|rgba)/.test(color);
    var isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
    var isHEX = /^(#)/.test(color);
    var newColor;
    if (isRGB) {
        var arrayColor = color.replace(/[rgba()]/g, '').split(',');
        newColor = arrayColor[0] + "," + arrayColor[1] + "," + arrayColor[2];
        setVar(colorName, newColor, el);
    }
    else if (isHEX) {
        var rgb = hexToRgb(color);
        newColor = rgb.r + "," + rgb.g + "," + rgb.b;
        setVar(colorName, newColor, el);
    }
    else if (isColor(color)) {
        var style = getComputedStyle(el);
        newColor = style.getPropertyValue('--vs-' + color);
        setVar(colorName, newColor, el);
    }
    else if (isRGBNumbers) {
        setVar(colorName, color, el);
    }
    else {
        //     consolee.warn({
        //       el,
        //       link: 'https://lusaxweb.github.io/vuesax/',
        //       text: `• Component: ${el.__vue__.$vnode.componentOptions.tag}
        // • Warn info: El formato de la propiedad color es incorrecto
        // • Prop: color
        // • value: ${color}
        // • Valores Permitidos: (RGB, HEX, RGB Numbers, Vuesax Colors)
        // • Example: color="#000" or color="rgb(255,255,255)"`,
        //       title: 'VUESAX'
        //     })
    }
};
export { setColor, setVar, isColor };
