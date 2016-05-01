var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "jquery", "EventEmitter", "../constants/shop.constants", "../../commons/dispatcher/app-dispatcher"], function (require, exports, $, EventEmitter, shop_constants_1, app_dispatcher_1) {
    "use strict";
    var ShopStore = (function (_super) {
        __extends(ShopStore, _super);
        function ShopStore() {
            _super.call(this);
            this.CHANGE_EVENT = 'change';
            this.ghUsers = {};
            this.apiUrl = '//githubshop.herokuapp.com/api/ghuser/';
        }
        ShopStore.prototype.add = function (username) {
            var that = this;
            $.ajax(this.apiUrl + username, {
                success: function (ghUser) {
                    that.ghUsers[ghUser.id.toString()] = ghUser;
                    that.emitChange();
                }
            });
        };
        ShopStore.prototype.remove = function (ghUser) {
            delete this.ghUsers[ghUser.id.toString()];
            this.emitChange();
        };
        ShopStore.prototype.getGHUsers = function () {
            var users = [];
            for (var i in this.ghUsers) {
                if (this.ghUsers.hasOwnProperty(i)) {
                    users.push(this.ghUsers[i]);
                }
            }
            return users;
        };
        ;
        ShopStore.prototype.emitChange = function () {
            this.emit(this.CHANGE_EVENT);
        };
        ShopStore.prototype.onChange = function (callback) {
            this.on(this.CHANGE_EVENT, callback);
        };
        ShopStore.prototype.removeChangeListener = function (callback) {
            this.removeListener(this.CHANGE_EVENT, callback);
        };
        return ShopStore;
    }(EventEmitter));
    var shopStore = new ShopStore();
    exports.__esModule = true;
    exports["default"] = shopStore;
    app_dispatcher_1["default"].register(function (action) {
        switch (action.actionType) {
            case shop_constants_1["default"].USER_ADD:
                shopStore.add(action['username']);
                break;
            case shop_constants_1["default"].USER_REMOVE:
                shopStore.remove(action['ghUser']);
                break;
        }
    });
});

//# sourceMappingURL=shop.store.js.map
