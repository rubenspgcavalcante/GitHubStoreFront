import React = require('react');
import shopAction from "../actions/shop.action";

import Props = __React.Props;
import IGHUser = shop.IGHUser;

class GHUserEntry extends React.Component<{ghUser:IGHUser}, {}> {
    render() {
        var user:IGHUser = this.props.ghUser;
        return (
            <div className="col-sm-12" id={String(this.props.ghUser.id)}>
                <div className="col-sm-2">
                    <img src={user.avatarUrl} style={{width:64, height:64}}></img>
                    <span>Price: <b>${user.price}</b></span>
                    <button onClick={this.onRemove.bind(this)} className="btn btn-xs btn-default">Remove</button>
                </div>
                <div className="col-sm-10">
                    <ul className="list-group">
                        <li className="list-group-item">Username: {user.name}</li>
                        <li className="list-group-item">Name: {user.name}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                    </ul>
                </div>
            </div>
        );
    }

    private onRemove() {
        shopAction.remove(this.props.ghUser);
    }
}

export class Cart extends React.Component<{ghUsers:IGHUser[]}, {}> {
    static defaultProps = {
        ghUsers: []
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var users = [];
        var totalValue = 0;

        this.props.ghUsers.forEach(function (ghUser:IGHUser) {
            users.push(<GHUserEntry key={ghUser.id} ghUser={ghUser}></GHUserEntry>);
            totalValue += ghUser.price;
        });
        return (
            <div className="row container">
                <div className="col-lg-6">
                    <span className="h3">Cart</span>
                    {users}
                </div>
                <div className="col-lg-6">
                    <span className="h4">
                        Total: {totalValue}
                    </span>
                </div>
            </div>
        );
    }
}