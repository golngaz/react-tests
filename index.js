import Clock from './clock'
import Customers from './customers'
import TicTacToe from './ticTacToe/TicTacToe'
import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const customers = [
            {id: 1, name: "miguel"},
            {id: 2, name: "Romain"},
            {id: 3, name: "Vincent"},
        ]

        return (
            <div id="content">
                <h1>Bonjour, il est : <Clock /></h1>
                <div className="list-customers">
                    <Customers customers={customers}/>
                </div>
                <div>
                    <TicTacToe />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
