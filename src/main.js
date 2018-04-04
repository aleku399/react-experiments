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
var ReactDOM = require("react-dom");
var palette_js_1 = require("./component/palette.js");
var colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363',
    '#85FFC7', '#297373', '#FF8552', '#A40E4C'];
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        return (React.createElement("ul", null, palette_js_1.colorListItems(colors)));
    };
    return List;
}(React.Component));
ReactDOM.render(React.createElement(List, null), document.getElementById('intro'));
