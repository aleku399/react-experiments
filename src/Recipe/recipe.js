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
var Recipe = (function (_super) {
    __extends(Recipe, _super);
    function Recipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Recipe.prototype.render = function () {
        var list = this.props.ingredients.map(function (ingredient) {
            return React.createElement("li", { key: ingredient.name }, ingredient.name);
        });
        var para = this.props.steps.map(function (step, i) {
            return React.createElement("p", { key: i }, step);
        });
        return (React.createElement("section", { id: this.props.name.toLowerCase().replace(/ /g, '-') },
            React.createElement("h1", null, this.props.title),
            React.createElement("ul", null, list),
            React.createElement("section", { className: "instructions" },
                React.createElement("h2", null, "Cooking Instructions"),
                para)));
    };
    return Recipe;
}(React.Component));
exports.Recipe = Recipe;
