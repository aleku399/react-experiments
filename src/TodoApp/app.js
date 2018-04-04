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
var list_js_1 = require("./list.js");
var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            title: 'todos',
            list: []
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.deleteClick = _this.deleteClick.bind(_this);
        _this.clearInput = _this.clearInput.bind(_this);
        return _this;
    }
    MyApp.prototype.handleClick = function (e) {
        var item = this._item.value;
        var arrList = this.state.list;
        if (item !== '') {
            arrList.unshift({
                text: item,
                key: Date.now()
            });
            this.setState({
                list: arrList
            });
        }
        e.preventDefault();
    };
    MyApp.prototype.clearInput = function () {
        this.setState({
            list: []
        });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    };
    MyApp.prototype.deleteClick = function (key) {
        var arrList = this.state.list;
        var filteredlist = arrList.filter(function (item) {
            return item.key !== key;
        });
        this.setState({
            list: filteredlist
        });
    };
    MyApp.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "box" },
            React.createElement("h1", { className: "title" }, this.state.title),
            React.createElement("div", { className: "inputbox" },
                React.createElement("input", { className: "todo", type: "text", onChange: this.clearInput, placeholder: "enter task", ref: function (input) { return _this._item = input; } }),
                React.createElement("button", { className: "button", onClick: this.handleClick }, "Add")),
            React.createElement(list_js_1.ListedItem, { delete: this.deleteClick, toDoList: this.state.list })));
    };
    return MyApp;
}(React.Component));
exports.MyApp = MyApp;
