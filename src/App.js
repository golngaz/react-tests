import React from 'react'
import Clock from './clock'
import Customers from './customers'
import TicTacToe from './ticTacToe/TicTacToe'
import BasicForm from './BasicForm'
import PasswordChecker from './PasswordChecker'
import Counter from './Counter'
import OldClock from './OldClock/OldClock'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {clockMode: 'normal'}
    }

    render() {
        const customers = [
            {id: 1, name: 'miguel'},
            {id: 2, name: 'Romain'},
            {id: 3, name: 'Vincent'},
        ]

        return (
            <div id="content">
                <h1 onClick={() => this.setState({clockMode: this.state.clockMode === 'normal' ? 'old' : 'normal' })}>
                    Bonjour, il est : {this.state.clockMode === 'old' ? <OldClock display="inline-block" width="70px"/> : <Clock /> }
                </h1>
                <div className="list-customers">
                    <Customers customers={customers}/>
                </div>
                <div>
                    <TicTacToe />
                </div>

                <br /><br />
                <div>
                    <BasicForm />
                </div>
                <div>
                    <PasswordChecker />
                </div>
                <div>
                    <Counter><b>Bonjour</b></Counter>
                </div>
            </div>
        )
    }
}