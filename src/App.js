import React, {Fragment} from 'react'
import Clock from './clock'
import Customers from './customers'
import TicTacToe from './ticTacToe/TicTacToe'
import BasicForm from './BasicForm'
import PasswordChecker from './PasswordChecker'
import Counter from './Counter'
import OldClock from './OldClock/OldClock'
import Fragments from './Fragments'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Fab from "@material-ui/core/Fab"
import AddIcon from '@material-ui/icons/Add'

import 'bootstrap/dist/css/bootstrap.css'
import '../style.scss'
import withClass from "./HOC/withClass"

const ButtonCustom = withClass('custom-button-ui')(Button)

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
                <Customers customers={customers}/>
                <TicTacToe onClick={() => alert('bonjour')}/><br />
                <BasicForm />
                <PasswordChecker />
                <Counter><b>Bonjour</b></Counter>
                <Fragments />
                <ButtonCustom className="persooo">Mon bouton custom</ButtonCustom>
                <Grid container>
                    <Grid item>
                        <ButtonGroup size="small" aria-label="Small outlined button group">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <Fab color="primary" aria-label="Add">
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}