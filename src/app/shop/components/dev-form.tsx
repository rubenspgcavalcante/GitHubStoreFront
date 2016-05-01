import React = require('react');
import Props = __React.Props;

export class DevForm extends React.Component<Props<any>, {}> {
    render() {
        return (
            <div className="col-sm-12">
                <span className="h3">Add a developer</span>
                <div className="form-group form-inline">
                    <input id="username" className="form-control" placeholder="GitHub Username"/>
                    <span>{this.props['price']}</span>
                    <button className="btn btn-success">Add</button>
                </div>
            </div>
        );
    }
}