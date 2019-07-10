import React from 'react'

import './style.scss'
import {Container} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Panel from './Panel'
import Configurator from './Configurator'
import Result from './Result'
import ItemSelector from './ItemSelector/ItemSelector'
import axios from 'axios'
import Item from "./src/Item.ts";
import ItemCollection from "./src/ItemCollection.ts";

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: new ItemCollection(),
            itemToConfigure: null
        }
    }

    componentDidMount() {
        axios.get(this.props.config.uri + 'data.json')
            .then((response) => this.setState({items: this.initItems(response.data)}))
            .catch(() => {
                this.setState({items: this.initItems([{id: 1, name: 'error', img: 'https://bit.ly/2JpL7oJ'}])})
            })
    }

    initItems(data) {
        let items = [];
        data.forEach((itemDatum) => items.push(Item.fromData(itemDatum)))

        return new ItemCollection(items);
    }

    onSelectedItem(item) {
        this.setState({items : this.state.items.popSlice(item), itemToConfigure: item})
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
                                            <Configurator item={this.state.itemToConfigure}/>
                                        </Panel>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Result />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className="items" item xs={5}>
                                <ItemSelector items={this.state.items} onSelect={(item) => this.onSelectedItem(item)}/>
                            </Grid>
                        </Grid>
                    </Panel>
                </Container>
            </div>
        )
    }
}