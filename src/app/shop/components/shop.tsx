import React = require('react');
import Props = __React.Props;

import {DevForm} from "./dev-form";
import {Cart} from "./cart";

export class ShopApp extends React.Component<Props<any>, {}> {
    render() {
        return (
            <div className="row">
                <DevForm></DevForm>
                <br/>
                <Cart></Cart>
            </div>
        );
    }
}