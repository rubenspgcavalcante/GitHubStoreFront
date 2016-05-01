import ShopConstants from "../constants/shop.constants";
import AppDispatcher from "../../commons/dispatcher/app-dispatcher"

import IGHUser = shop.IGHUser;

class ShopActions {
    add(username:string) {
        AppDispatcher.dispatch({
            actionType: ShopConstants.USER_ADD,
            username: username
        });
    }

    remove(ghUser:IGHUser) {
        AppDispatcher.dispatch({
            actionType: ShopConstants.USER_REMOVE,
            ghUser: ghUser
        });
    }
}

export default new ShopActions();