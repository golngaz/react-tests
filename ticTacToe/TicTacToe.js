import React from 'react';
import Case from './Case';

class TicTacToe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {cases : Array(9).fill(0), player: 1, winner: 0}
    }

    render() {
        return (
            <div className="tic-tac-toe">
                Joueur : {this.state.player}
                <div className="plat">
                    {this.state.cases.map((v, i) => (
                        <Case onClick={() => this.caseChecked(i)} key={i} value={v}/>
                    ))}
                </div>
                {this.renderWinner()}
            </div>

        )
    }

    caseChecked(caseId) {
        if (this.winner)
            return;

        let cases = this.state.cases.slice();
        cases[caseId] = this.state.player;

        this.setState({cases: cases, player: 3 - this.state.player})

        this.winner = TicTacToe.findWinner(cases)
    }

    static findWinner(cases) {
        return TicTacToe.findWinnerLine(cases) || TicTacToe.findWinnerColumn(cases) || TicTacToe.findWinnerDiagonals(cases)
    }

    static findWinnerLine(cases) {
        for (let line = 0; line < 3; line++) {
            if (cases[line * 3] === cases[line * 3 + 1] && cases[line * 3 + 1] === cases[line * 3 + 2]) {
                return cases[line * 3]
            }
        }

        return 0
    }

    static findWinnerColumn(cases) {
        for (let column = 0; column < 3; column++) {
            if (cases[column] === cases[column + 3] && cases[column + 3] === cases[column + 6]) {
                return cases[column]
            }
        }

        return 0
    }

    static findWinnerDiagonals(cases) {
        if (cases[0] === cases[4] && cases[4] === cases[8]) {
            return cases[4]
        }

        if (cases[2] === cases[4] && cases[4] === cases[6]) {
            return cases[4]
        }

        return 0
    }

    renderWinner() {
        if (this.winner) {
            return (
                <span>Le joueur {this.winner} à gagné !</span>
            )
        }
    }
}

export default TicTacToe