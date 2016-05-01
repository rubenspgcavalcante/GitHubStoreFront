import React = require('react');

import * as _is from "is";
import Props = __React.Props;
import IGHUser = shop.IGHUser;

class GHUserEntry extends React.Component<{ghUser:IGHUser}, {}> {
    render() {
        return (
            <li id={String(this.props.ghUser.id)}>{this.props.ghUser.name}</li>
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
                        return <GHUserEntry ghUser={ghUser}></GHUserEntry> })}
                </ul>
            </div>
        );
    }
}