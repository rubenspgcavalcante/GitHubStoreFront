var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', "../actions/shop.action"], function (require, exports, React, shop_action_1) {
    "use strict";
    var GHUserEntry = (function (_super) {
        __extends(GHUserEntry, _super);
        function GHUserEntry() {
            _super.apply(this, arguments);
        }
        GHUserEntry.prototype.render = function () {
            var user = this.props.ghUser;
            return (React.createElement("div", {className: "col-sm-12", id: String(this.props.ghUser.id)}, React.createElement("div", {className: "col-sm-2"}, React.createElement("img", {src: user.avatarUrl, style: { width: 64, height: 64 }}), React.createElement("span", null, "Price: ", React.createElement("b", null, "$", user.price)), React.createElement("button", {onClick: this.onRemove.bind(this), className: "btn btn-xs btn-default"}, "Remove")), React.createElement("div", {className: "col-sm-10"}, React.createElement("ul", {className: "list-group"}, React.createElement("li", {className: "list-group-item"}, "Username: ", user.name), React.createElement("li", {className: "list-group-item"}, "Name: ", user.name), React.createElement("li", {className: "list-group-item"}, "Email: ", user.email)))));
        };
        GHUserEntry.prototype.onRemove = function () {
            shop_action_1["default"].remove(this.props.ghUser);
        };
        return GHUserEntry;
    }(React.Component));
    var Cart = (function (_super) {
        __extends(Cart, _super);
        function Cart(props) {
            _super.call(this, props);
            this.state = {};
        }
        Cart.prototype.render = function () {
            var users = [];
            var totalValue = 0;
            this.props.ghUsers.forEach(function (ghUser) {
                users.push(React.createElement(GHUserEntry, {key: ghUser.id, ghUser: ghUser}));
                totalValue += ghUser.price;
            });
            return (React.createElement("div", {className: "row container"}, React.createElement("div", {className: "col-lg-6"}, React.createElement("span", {className: "h3"}, "Cart"), users), React.createElement("div", {className: "col-lg-6"}, React.createElement("span", {className: "h4"}, "Total: ", totalValue))));
        };
        Cart.defaultProps = {
            ghUsers: []
        };
        return Cart;
    }(React.Component));
    exports.Cart = Cart;
});

//# sourceMappingURL=cart.js.map
