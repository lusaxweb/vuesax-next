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
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { setColor } from '../util/index';
var VsComponent = /** @class */ (function (_super) {
    __extends(VsComponent, _super);
    function VsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsComponent.prototype.handleWatchColor = function () {
        setColor('color', this.color, this.$el);
    };
    VsComponent.prototype.mounted = function () {
        if (this.color) {
            setColor('color', this.color, this.$el);
        }
    };
    __decorate([
        Prop({ type: String, "default": '' })
    ], VsComponent.prototype, "color");
    __decorate([
        Prop({ type: Boolean, "default": false })
    ], VsComponent.prototype, "active");
    __decorate([
        Watch('color')
    ], VsComponent.prototype, "handleWatchColor");
    VsComponent = __decorate([
        Component
    ], VsComponent);
    return VsComponent;
}(Vue));
export default VsComponent;
