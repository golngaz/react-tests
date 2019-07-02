"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BasicForm extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("span", null, this.renderResult()), _react.default.createElement("input", {
      type: "text",
      onChange: e => this.inputChanged(e)
    }));
  }

  renderResult() {
    return this.state.value.split('').reverse().join('');
  }

  inputChanged(e) {
    this.setState({
      value: e.currentTarget.value
    });
  }

}

exports.default = BasicForm;
