import $ = require("jquery");
import EventEmitter = require("EventEmitter");

import ShopConstants from "../constants/shop.constants";
import AppDispatcher from "../../commons/dispatcher/app-dispatcher"

import IGHUser = shop.IGHUser;
import IAction = Flux.IAction;

class ShopStore extends EventEmitter {
    private CHANGE_EVENT = 'change';

    private ghUsers:Object = {};
    private apiUrl:String = '//localhost:8080/api/ghuser/';

    constructor() {
        super();
    }

    add(username:string) {
        const that = this;
        $.ajax(this.apiUrl + username, <JQueryAjaxSettings>{
            success: function (ghUser) {
                that.ghUsers[ghUser.id.toString()] = ghUser;
                that.emitChange();
            }
        });
    }

    getGHUsers():IGHUser[] {
        var users = [];
        for (var i in this.ghUsers) {
            if (this.ghUsers.hasOwnProperty(i)) {
                users.push(this.ghUsers[i]);
            }
        }
        return users;
    };

    remove(ghUser:IGHUser) {
        delete this.ghUsers[ghUser.id.toString()];
    }

    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    onChange(callback:Function) {
        this.on(this.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback:Function) {
        this.removeListener(this.CHANGE_EVENT, callback);
    }
}

var shopStore = new ShopStore();
export default shopStore;

AppDispatcher.register(function (action:IAction<ShopConstants>) {

    switch (action.actionType) {
        case ShopConstants.USER_ADD:
            shopStore.add(action['username']);
            shopStore.emitChange();
            break;

        case ShopConstants.USER_REMOVE:
            break;
    }

});