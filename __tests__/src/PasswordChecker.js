"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dangerLevels = {
  ok: 'ok',
  neutral: 'neutral',
  warning: 'warning',
  danger: 'danger'
};

class PasswordChecker extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      dangerLevel: dangerLevels.neutral,
      value: '',
      displayPassword: false
    };
    this.checkPasswordTimeout = null;
  }

  componentDidMount() {
    this.checkPassword(this.state.value);
  }

  render() {
    return _react.default.createElement("div", {
      className: "form-password"
    }, _react.default.createElement("input", {
      type: this.state.displayPassword ? 'text' : 'password',
      value: this.state.value,
      className: this.state.dangerLevel,
      onChange: e => this.checkPassword(e.currentTarget.value)
    }), _react.default.createElement("img", {
      alt: "",
      className: "load-password",
      style: this.state.dangerLevel === dangerLevels.neutral && this.state.value ? {} : {
        display: 'none'
      },
      src: "https://www.voya.ie/Interface/Icons/LoadingBasketContents.gif"
    }), _react.default.createElement("button", {
      onClick: () => this.setState({
        displayPassword: !this.state.displayPassword
      })
    }, this.state.displayPassword ? 'Masquer' : 'Afficher'));
  }

  checkPassword(value) {
    this.setState({
      value: value
    });
    value = value.trim();

    if (!value) {
      this.setState({
        dangerLevel: dangerLevels.neutral
      });
      return;
    }

    if (this.checkPasswordTimeout) {
      clearTimeout(this.checkPasswordTimeout);
      this.checkPasswordTimeout = null;
    }

    this.setState({
      dangerLevel: dangerLevels.neutral
    });
    this.checkPasswordTimeout = setTimeout(() => this.calculateDangerLevel(value), 1000);
  }

  calculateDangerLevel(value) {
    let clout = 0;
    let flagMaj = false;
    let flagNumber = false;
    let flagElse = false;
    let flagComplex = false;
    value.split('').forEach(function (c) {
      if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c) !== -1) {
        if (!flagMaj) {
          clout += 8;
          flagMaj = true;
        }
      } else if (!isNaN(c)) {
        if (!flagNumber) {
          clout += 8;
          flagNumber = true;
        }
      } else if ('abcdefghijklmnopqrstuvwxyz '.indexOf(c) !== -1) {
        if (!flagElse) {
          clout += 8;
          flagElse = true;
        }
      } else if (!flagComplex) {
        clout += 12;
        flagComplex = true;
      }

      clout += 1;
    });

    if (value.length < 6) {
      clout -= 11;
    }

    console.log(clout);

    if (clout > 31) {
      this.setState({
        dangerLevel: dangerLevels.ok
      });
    } else if (clout > 10) {
      this.setState({
        dangerLevel: dangerLevels.warning
      });
    } else {
      this.setState({
        dangerLevel: dangerLevels.danger
      });
    }
  }

}

exports.default = PasswordChecker;
