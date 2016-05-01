var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', "../actions/shop.action"], function (require, exports, React, shop_action_1) {
    "use strict";
    var DevForm = (function (_super) {
        __extends(DevForm, _super);
        function DevForm(props) {
            _super.call(this, props);
            this.state = { value: '' };
        }
        DevForm.prototype.render = function () {
            return (React.createElement("div", {className: "col-sm-12"}, React.createElement("span", {className: "h3"}, "Add a developer"), React.createElement("div", {className: "form-group form-inline"}, React.createElement("input", {id: "username", className: "form-control", placeholder: "GitHub Username", onChange: this._onChange.bind(this), value: this.state['value']}), React.createElement("button", {className: "btn btn-success", onClick: this._onAdd.bind(this)}, "Add"))));
        };
        DevForm.prototype._onChange = function (event) {
            this.setState({ value: event.target['value'] });
        };
        DevForm.prototype._onAdd = function (event) {
            shop_action_1["default"].add(this.state['value']);
            this.setState({ value: '' });
        };
        return DevForm;
    }(React.Component));
    exports.DevForm = DevForm;
});

//# sourceMappingURL=dev-form.js.map
