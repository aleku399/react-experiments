"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var color_1 = require("./color");
var Palette = (function (_super) {
    __extends(Palette, _super);
    function Palette() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Palette.prototype.render = function () {
        var myStyle = {
            backgroundColor: this.props.bgColor,
            display: 'block',
            height: '200px',
            width: '150px',
            filter: 'drop-shadow(0px 0px 5px red)',
            padding: '0px'
        };
        return (React.createElement("div", { className: "palette" },
            React.createElement("span", { style: myStyle }, "Alex"),
            React.createElement(color_1.Code, { numcode: myStyle.backgroundColor })));
    };
    return Palette;
}(React.Component));
exports.colorListItems = function (colors) {
    return colors
        .map(function (color) { return React.createElement("li", { key: color }, React.createElement(Palette, { bgColor: color })); });
};
