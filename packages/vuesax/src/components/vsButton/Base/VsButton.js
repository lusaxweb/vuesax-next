var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Color from 'color';
import { Component, Prop } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
import { isColor, setColor } from '../../../util/index';
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index';
var VsButton = /** @class */ (function (_super) {
    __extends(VsButton, _super);
    function VsButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Class = '';
        return _this;
    }
    VsButton.prototype.setColors = function () {
        var ComponentColor = this.color;
        if (!this.color) {
            ComponentColor = 'primary';
        }
        if (!isColor(ComponentColor)) {
            var colorDarken = Color(ComponentColor).darken(0.2).rgb().string();
            setColor('color-darken', colorDarken, this.$el);
            var colorRotate = Color(ComponentColor).rotate(25).rgb().string();
            setColor('color-rotate', colorRotate, this.$el);
        }
        else {
            var vsColor = "rgb(" + getComputedStyle(this.$el).getPropertyValue('--vs-color') + ")";
            var colorDarken = Color(vsColor).darken(0.2).rgb().string();
            setColor('color-darken', colorDarken, this.$el);
            var colorRotate = Color(vsColor).rotate(25).rgb().string();
            setColor('color-rotate', colorRotate, this.$el);
        }
    };
    VsButton.prototype.mounted = function () {
        // this.setColors()
    };
    VsButton.prototype.render = function (h) {
        var _a, _b, _c, _d, _e, _f;
        var _this = this;
        var btn = h('button', {
            staticClass: 'vs-button',
            "class": [
                (_a = {}, _a["vs-button--active"] = !!this.active, _a),
                (_b = {}, _b["vs-button--active-disabled"] = !!this.activeDisabled, _b),
                (_c = {}, _c["vs-button--default"] = !this.flat &&
                    !this.border &&
                    !this.gradient, _c),
                (_d = {}, _d["vs-button--flat"] = !!this.flat, _d),
                (_e = {}, _e["vs-button--border"] = !!this.border, _e),
                (_f = {}, _f["vs-button--gradient"] = !!this.gradient, _f),
            ],
            attrs: __assign({}, this.$attrs),
            on: __assign(__assign({}, this.$listeners), { mousedown: function (evt) {
                    // ripple effect
                    if (_this.ripple === 'reverse') {
                        rippleReverse(evt);
                    }
                    else if (_this.ripple === 'cut') {
                        rippleCut(evt);
                    }
                    else {
                        if (_this.flat) {
                            ripple(evt, _this.color || _this.flat && !_this.active && document.activeElement !== _this.$el ? 'primary' : null, _this.flat && !_this.active && document.activeElement !== _this.$el);
                        }
                        else {
                            console.log('entro aqu', _this.color);
                            ripple(evt, null, false);
                        }
                    }
                } })
        }, this.$slots["default"]);
        return btn;
    };
    __decorate([
        Prop({ type: String, "default": '' })
    ], VsButton.prototype, "ripple");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsButton.prototype, "activeDisabled");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsButton.prototype, "flat");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsButton.prototype, "border");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsButton.prototype, "gradient");
    VsButton = __decorate([
        Component
    ], VsButton);
    return VsButton;
}(VsComponent));
export default VsButton;
