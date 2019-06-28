import React from 'react'
import Case from './Case'

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
            return

        let cases = this.state.cases.slice()
        cases[caseId] = this.state.player

        this.setState({cases: cases, player: 3 - this.state.player})

        this.winner = TicTacToe.findWinner(cases)
    }

    static findWinner(cases) {
        const matrixWin = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6],
        ]

        let winner = 0

        matrixWin.some(function(matrix) {
            if (cases[matrix[0]] !== 0 && cases[matrix[0]] === cases[matrix[1]] && cases[matrix[1]] === cases[matrix[2]]) {
                winner = cases[matrix[0]]
                return true
            }
        })

        return winner

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