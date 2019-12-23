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
import { Component, Prop } from 'vue-property-decorator';
var VsCol = /** @class */ (function (_super) {
    __extends(VsCol, _super);
    function VsCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VsCol.prototype.render = function (h) {
        var vsCol = h('div', {
            staticClass: 'vs-col',
            style: {
                order: this.order
            },
            "class": [
                "vs-col--w-" + this.w,
                "vs-col--offset-" + this.offset,
                "vs-col--lg-" + this.lg,
                "vs-col--sm-" + this.sm,
                "vs-col--xs-" + this.xs,
            ]
        }, this.$slots["default"]);
        return vsCol;
    };
    __decorate([
        Prop({ type: [String, Number], "default": '12' })
    ], VsCol.prototype, "w");
    __decorate([
        Prop({ type: [String, Number], "default": '0' })
    ], VsCol.prototype, "offset");
    __decorate([
        Prop({ type: [String, Number], "default": '0' })
    ], VsCol.prototype, "order");
    __decorate([
        Prop({ type: [String, Number], "default": '0' })
    ], VsCol.prototype, "lg");
    __decorate([
        Prop({ type: [String, Number], "default": '0' })
    ], VsCol.prototype, "sm");
    __decorate([
        Prop({ type: [String, Number], "default": '0' })
    ], VsCol.prototype, "xs");
    VsCol = __decorate([
        Component
    ], VsCol);
    return VsCol;
}(Vue));
export default VsCol;
