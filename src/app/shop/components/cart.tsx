import React = require('react');

import * as _is from "is";
import Props = __React.Props;
import IGHUser = shop.IGHUser;

class GHUserEntry extends React.Component<Props<IGHUser>, {}> {
    render() {
        return (
            <li id={this.props['id']}>{this.props['name']}</li>
        );
    }
}

export class Cart extends React.Component<Props<any>, {}> {
    static defaultProps = {
        ghUsers: []
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="col-sm-12">
                <span className="h3">Cart</span>
                <ul>
                    {this.props['ghUsers'].map(function(ghUser:IGHUser){
                        return <GHUserEntry></GHUserEntry> })}
                </ul>
            </div>
        );
    }
}