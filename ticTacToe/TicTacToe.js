import React from 'react';
import Case from './Case';

class TicTacToe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {cases : Array(9).fill(0), player: 1}

        this.caseChecked = this.caseChecked.bind(this)
    }

    render() {
        return (
            <div className="tic-tac-toe">
                Joueur : {this.state.player}
                <div className="plat">
                    {this.state.cases.map((v, i) => (
                        <Case onClick={(salt) => this.caseChecked(i, salt)} key={i} value={v}/>
                    ))}
                </div>
            </div>

        )
    }

    caseChecked(caseId, salt) {
        this.setState(function(state) {
            state.cases[caseId] = state.player;
            return {cases: state.cases, player: 3 - state.player}
        });
    }
}

export default TicTacToe