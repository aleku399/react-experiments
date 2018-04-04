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
var showfrnds_1 = require("./showfrnds");
var Friends = (function (_super) {
    __extends(Friends, _super);
    function Friends(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            name: 'Chris Coleman',
            friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
        };
        _this.addFriend = _this.addFriend.bind(_this);
        return _this;
    }
    Friends.prototype.addFriend = function () {
        var arrFrnds = this.state.friends;
        var name = this._name.value;
        arrFrnds.push(name);
        this.setState({
            friends: arrFrnds
        });
    };
    Friends.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h3", null,
                "Name: ",
                this.state.name),
            React.createElement("button", { onClick: this.addFriend }, "Add"),
            ": ",
            React.createElement("input", { type: "text", ref: function (input) { return _this._name = input; } }),
            React.createElement(showfrnds_1.ShowFrnds, { names: this.state.friends })));
    };
    return Friends;
}(React.Component));
exports.Friends = Friends;
