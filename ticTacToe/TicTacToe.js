import React from 'react'
import Case from './Case'

class TicTacToe extends React.Component {
    constructor(props) {
        super(props)

        this.state = TicTacToe.defaultState()
    }

    static defaultState() {
        return {
            cases   : Array(9).fill(0),
            player  : 1,
            winner  : 0,
            history : [],
            canReset: false,
        }
    }

    render() {
        return (
            <div className="tic-tac-toe">
                <span>Joueur : {this.state.player}</span>
                <div className="board">
                    <div className="plat">
                        {this.state.cases.map((value, i) => (
                            <Case onClick={() => this.caseChecked(i)} key={i} value={value}/>
                        ))}
                    </div>
                    <div className="history">
                        {this.state.history.map((historyLine, i) => (
                            <div key={i} className="history-line" onClick={() => this.restoreHistoryLine(i)}>
                                <div className="plat">
                                    {historyLine.cases.map((value, i) => (
                                        <Case key={i} value={value}/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Winner winner={this.state.winner} cases={this.state.cases} />
                {this.state.canReset ?
                    <div className="actions">
                        <button onClick={() => this.setState(TicTacToe.defaultState())}>RESET</button>
                    </div>
                : ''}
            </div>

        )
    }

    restoreHistoryLine(historyLine) {
        this.setState(this.state.history.slice(historyLine, historyLine + 1)[0])
    }

    caseChecked(caseId) {
        if (this.state.winner)
            return

        let cases = this.state.cases.slice()
        cases[caseId] = this.state.player

        this.setState({
            canReset: true,
            cases: cases,
            player: 3 - this.state.player,
            history: this.state.history.concat([{
                cases: this.state.cases,
                winner: this.state.winner,
                player: this.state.player,
                //history: this.state.history.slice(), // keep history or not
            }]),
            winner: TicTacToe.findWinner(cases),
        })
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
            if (cases[matrix[0]] !== 0 &&
                cases[matrix[0]] === cases[matrix[1]] &&
                cases[matrix[1]] === cases[matrix[2]]
            ) {
                return winner = cases[matrix[0]]
            }
        })

        return winner

    }


}

function Winner(props) {
    if (!props.winner) {
        if (props.cases.some(function (oneCase) {return oneCase === 0})) {
            return <span />
        }

        return <span>Égalité !</span>
    }

    return (
        <span>Le joueur {props.winner} à gagné !</span>
    )
}

export default TicTacToe