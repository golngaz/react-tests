import React, {Fragment} from 'react'
import Clock from './clock'
import Customers from './customers'
import TicTacToe from './ticTacToe/TicTacToe'
import BasicForm from './BasicForm'
import PasswordChecker from './PasswordChecker'
import Counter from './Counter'
import OldClock from './OldClock/OldClock'
import Fragments from './Fragments'
import Button from './wrap-material-ui/ButtonUi';
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

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
                <div>
                    <Fragments />
                </div>
                <div>
                    <Button className="ui" variant="contained" color="primary">BONJOUR</Button>
                </div>
                <div>
                    <Grid container>
                        <Grid item>
                            <ButtonGroup size="small" aria-label="Small outlined button group">
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Fab color="primary" aria-label="Add">
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}