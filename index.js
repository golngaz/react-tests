import Clock from './src/clock'
import Customers from './src/customers'
import TicTacToe from './src/ticTacToe/TicTacToe'
import BasicForm from './src/BasicForm'
import PasswordChecker from './src/PasswordChecker'
import Counter from "./src/Counter";
import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
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

                <br /><br />
                <div>
                    <BasicForm />
                </div>
                <div>
                    <PasswordChecker />
                </div>
                <div>
                    <Counter />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
