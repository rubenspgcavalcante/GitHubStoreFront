import React = require('react');
import ShopActions from "../actions/shop.action";

import Props = __React.Props;
import EventHandler = __React.EventHandler;
import FormEvent = __React.FormEvent;

export class DevForm extends React.Component<Props<any>, {}> {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <div className="col-sm-12">
                <span className="h3">Add a developer</span>
                <div className="form-group form-inline">
                    <input id="username" className="form-control" placeholder="GitHub Username"
                           onChange={this._onChange.bind(this)} value={this.state['value']}/>
                    <button className="btn btn-success" onClick={this._onAdd.bind(this)}>Add</button>
                </div>
            </div>
        );
    }

    _onChange(event:FormEvent) {
        this.setState({value: event.target['value']});
    }

    _onAdd(event:React.MouseEvent) {
        ShopActions.add(this.state['value']);
        this.setState({value: ''});
    }
}