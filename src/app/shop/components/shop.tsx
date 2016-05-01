import React = require('react');
import Props = __React.Props;

import shopStore from "../stores/shop.store";
import {DevForm} from "./dev-form";
import {Cart} from "./cart";

export class ShopApp extends React.Component<Props<any>, {}> {
    constructor(props) {
        super(props);
        this.state = {ghUsers: []};
    }

    componentDidMount() {
        shopStore.onChange(this.onChange.bind(this));
    }

    componentWillUnmount() {
        shopStore.removeChangeListener(this.onChange);
    }

    render() {
        return (
            <div className="row">
                <DevForm></DevForm>
                <br/>
                <Cart ghUsers={this.state['ghUsers']}></Cart>
            </div>
        );
    }

    private getGHUsers() {
        return shopStore.getGHUsers();
    }

    private onChange() {
        var users = this.getGHUsers();
        this.setState({ghUsers: users});
    }
}