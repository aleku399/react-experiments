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
var recipe_1 = require("./recipe");
var Show = (function (_super) {
    __extends(Show, _super);
    function Show() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Show.prototype.render = function () {
        var arr = this.props.recipes.map(function (obj, index) {
            return React.createElement(recipe_1.Recipe, { key: index, title: obj.title, ingredients: obj.ingredients, steps: obj.steps, name: obj.name });
        });
        return (React.createElement("article", null,
            React.createElement("header", null,
                React.createElement("h1", null, this.props.heading)),
            React.createElement("div", null, arr)));
    };
    return Show;
}(React.Component));
exports.Show = Show;
