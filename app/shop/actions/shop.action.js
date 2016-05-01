define(["require", "exports", "../constants/shop.constants", "../../commons/dispatcher/app-dispatcher"], function (require, exports, shop_constants_1, app_dispatcher_1) {
    "use strict";
    var ShopActions = (function () {
        function ShopActions() {
        }
        ShopActions.prototype.add = function (username) {
            app_dispatcher_1["default"].dispatch({
                actionType: shop_constants_1["default"].USER_ADD,
                username: username
            });
        };
        ShopActions.prototype.remove = function (ghUser) {
            app_dispatcher_1["default"].dispatch({
                actionType: shop_constants_1["default"].USER_REMOVE,
                ghUser: ghUser
            });
        };
        return ShopActions;
    }());
    exports.__esModule = true;
    exports["default"] = new ShopActions();
});

//# sourceMappingURL=shop.action.js.map
