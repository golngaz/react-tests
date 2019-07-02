"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Customers extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement("table", {
      className: "table-dark my-table"
    }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Id"), _react.default.createElement("th", null, "Nom"))), _react.default.createElement("tbody", null, this.props.customers.map(customer => _react.default.createElement("tr", {
      key: customer.id
    }, _react.default.createElement("td", null, customer.id), _react.default.createElement("td", null, customer.name)))));
  }

}

var _default = Customers;
exports.default = _default;
