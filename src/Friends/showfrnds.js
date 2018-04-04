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
var ShowFrnds = (function (_super) {
    __extends(ShowFrnds, _super);
    function ShowFrnds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowFrnds.prototype.render = function () {
        var listedItem = this.props.names.map(function (name) {
            return React.createElement("li", { key: name },
                " ",
                name,
                " ");
        });
        return (React.createElement("div", null,
            React.createElement("h3", null, " Friends "),
            React.createElement("ul", null,
                " ",
                listedItem)));
    };
    return ShowFrnds;
}(React.Component));
exports.ShowFrnds = ShowFrnds;
