/// <reference path="../../typings/browser.d.ts"/>
/// <reference path="../../globals.d.ts"/>

import ReactDOM = require("reactDom");
import React = require("react");
import {ShopApp} from "./shop/components/shop"

ReactDOM.render(
    <ShopApp></ShopApp>,
    document.getElementById("app-container")
);