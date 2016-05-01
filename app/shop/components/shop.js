var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', "../stores/shop.store", "./dev-form", "./cart"], function (require, exports, React, shop_store_1, dev_form_1, cart_1) {
    "use strict";
    var ShopApp = (function (_super) {
        __extends(ShopApp, _super);
        function ShopApp(props) {
            _super.call(this, props);
            this.state = { ghUsers: [] };
        }
        ShopApp.prototype.componentDidMount = function () {
            shop_store_1["default"].onChange(this.onChange.bind(this));
        };
        ShopApp.prototype.componentWillUnmount = function () {
            shop_store_1["default"].removeChangeListener(this.onChange);
        };
        ShopApp.prototype.render = function () {
            return (React.createElement("div", {className: "row"}, React.createElement(dev_form_1.DevForm, null), React.createElement("br", null), React.createElement(cart_1.Cart, {ghUsers: this.state['ghUsers']})));
        };
        ShopApp.prototype.getGHUsers = function () {
            return shop_store_1["default"].getGHUsers();
        };
        ShopApp.prototype.onChange = function () {
            var users = this.getGHUsers();
            this.setState({ ghUsers: users });
        };
        return ShopApp;
    }(React.Component));
    exports.ShopApp = ShopApp;
});

//# sourceMappingURL=shop.js.map
