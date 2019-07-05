import React from 'react'

import './style.scss'
import {Container} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Panel from './Panel'
import Configurator from './Configurator'
import Result from './Result'
import ListItems from './ListItems'
//import loadJsonFile from 'load-json-file'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        let file = 'data.json'

        //loadJsonFile(file).then((data) => console.log(data)) @todo
        this.state = {
            items: [
                { id:3102, name: 'Voile de la banshee', img: 'https://ddragon.leagueoflegends.com/cdn/9.13.1/img/item/3102.png'}
            ]
        }
    }

    render() {
        return (
            <div id="content">
                <Container className="container">
                    <Panel className="panel-main">
                        <Grid container spacing={3} alignItems="stretch">
                            <Grid item xs={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Panel>
                                            <Configurator />
                                        </Panel>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Result />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="items" item xs={5}>
                                <ListItems items={this.state.items} onSelect={() => this.onSelectItem()}/>
                            </Grid>
                        </Grid>
                    </Panel>
                </Container>
            </div>
        )
    }

    onSelectItem(item) {
        console.log('item selected : ', item)
    }
}