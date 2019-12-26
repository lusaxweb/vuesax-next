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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from 'vue-property-decorator';
import VsComponent from '../../../mixins/component';
var VsAlert = /** @class */ (function (_super) {
    __extends(VsAlert, _super);
    function VsAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsAlert.prototype.render = function (h) {
        var _a, _b, _c, _d, _e, _f;
        return h('div', {
            staticClass: 'vs-alert',
            "class": [
                'vs-alert',
                (_a = {}, _a["vs-alert--solid"] = !!this.solid, _a),
                (_b = {}, _b["vs-alert--border"] = !!this.border, _b),
                (_c = {}, _c["vs-alert--shadow"] = !!this.shadow, _c),
                (_d = {}, _d["vs-alert--gradient"] = !!this.gradient, _d),
                (_e = {}, _e["vs-alert--flat"] = !!this.flat, _e),
                (_f = {}, _f["vs-alert--relief"] = !!this.relief, _f),
            ]
        }, this.$slots["default"]);
    };
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsAlert.prototype, "solid");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsAlert.prototype, "border");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsAlert.prototype, "shadow");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsAlert.prototype, "gradient");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsAlert.prototype, "flat");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsAlert.prototype, "relief");
    VsAlert = __decorate([
        Component
    ], VsAlert);
    return VsAlert;
}(VsComponent));
export default VsAlert;
