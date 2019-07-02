"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Case = _interopRequireDefault(require("./Case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TicTacToe extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = TicTacToe.defaultState();
  }

  static defaultState() {
    return {
      cases: Array(9).fill(0),
      player: 1,
      winner: 0,
      history: [],
      canReset: false
    };
  }

  render() {
    return _react.default.createElement("div", {
      className: "tic-tac-toe"
    }, _react.default.createElement("span", null, "Joueur : ", this.state.player), _react.default.createElement("div", {
      className: "board"
    }, _react.default.createElement("div", {
      className: "plat"
    }, this.state.cases.map((value, i) => _react.default.createElement(_Case.default, {
      onClick: () => this.caseChecked(i),
      key: i,
      value: value
    }))), _react.default.createElement("div", {
      className: "history"
    }, this.state.history.map((historyLine, i) => _react.default.createElement("div", {
      key: i,
      className: "history-line",
      onClick: () => this.restoreHistoryLine(i)
    }, _react.default.createElement("div", {
      className: "plat"
    }, historyLine.cases.map((value, i) => _react.default.createElement(_Case.default, {
      key: i,
      value: value
    }))))))), _react.default.createElement(Winner, {
      winner: this.state.winner,
      cases: this.state.cases
    }), this.state.canReset ? _react.default.createElement("div", {
      className: "actions"
    }, _react.default.createElement("button", {
      onClick: () => this.setState(TicTacToe.defaultState())
    }, "RESET")) : '');
  }

  restoreHistoryLine(historyLine) {
    this.setState(this.state.history.slice(historyLine, historyLine + 1)[0]);
  }

  caseChecked(caseId) {
    if (this.state.winner) return;
    let cases = this.state.cases.slice();
    cases[caseId] = this.state.player;
    this.setState({
      canReset: true,
      cases: cases,
      player: 3 - this.state.player,
      history: this.state.history.concat([{
        cases: this.state.cases,
        winner: this.state.winner,
        player: this.state.player //history: this.state.history.slice(), // keep history or not

      }]),
      winner: TicTacToe.findWinner(cases)
    });
  }

  static findWinner(cases) {
    const matrixWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let winner = 0;
    matrixWin.some(function (matrix) {
      if (cases[matrix[0]] !== 0 && cases[matrix[0]] === cases[matrix[1]] && cases[matrix[1]] === cases[matrix[2]]) {
        return winner = cases[matrix[0]];
      }
    });
    return winner;
  }

}

function Winner(props) {
  if (!props.winner) {
    if (props.cases.some(function (oneCase) {
      return oneCase === 0;
    })) {
      return _react.default.createElement("span", null);
    }

    return _react.default.createElement("span", null, "\xC9galit\xE9 !");
  }

  return _react.default.createElement("span", null, "Le joueur ", props.winner, " \xE0 gagn\xE9 !");
}

var _default = TicTacToe;
exports.default = _default;
