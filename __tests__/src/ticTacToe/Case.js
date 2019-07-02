"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Case extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react.default.createElement("div", {
      className: "case",
      onClick: () => this.clicked()
    }, this.display());
  }

  clicked() {
    if (this.props.value === 0) {
      this.props.onClick();
    }
  }

  display() {
    if (this.props.value === 1) {
      return "X";
    } else if (this.props.value === 2) {
      return "O";
    } else {
      return "";
    }
  }

}

Case.defaultProps = {
  // for dynamics default values @see https://frontarm.com/james-k-nelson/conditionally-set-default-props/
  onClick: () => {}
};
var _default = Case;
exports.default = _default;
