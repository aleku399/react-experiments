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
var ListedItem = (function (_super) {
    __extends(ListedItem, _super);
    function ListedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListedItem.prototype.render = function () {
        var _this = this;
        var listeditems = this.props.toDoList.map(function (toDo) {
            return React.createElement("li", { onClick: function (e) { return _this.props.delete(toDo.key, e); }, key: toDo.key }, toDo.text);
        });
        return (React.createElement("ul", { className: "myUl" }, listeditems));
    };
    return ListedItem;
}(React.Component));
exports.ListedItem = ListedItem;
