import React from 'react'

import './style.scss'
import {Container} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Panel from './Panel'
import Configurator from './Configurator'
import Result from './Result'
import ItemSelector from './ItemSelector/ItemSelector'
import axios from 'axios'
import Item from './src/Item'
import ItemCollection from './src/ItemCollection'
import Bus from './src/Bus'
import Notif from './Notif'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: new ItemCollection(),
            itemToConfigure: null,
            notifs: []
        }

        this.bus = new Bus
    }

    componentDidMount() {
        axios.get(this.props.config.uri + 'data.json')
            .then((response) => this.setState({items: this.initItems(response.data)}))
            .catch(() => this.addNotif('La liste d\'items et de champions n\'a pas pu se charger', 'error'))

        this.bus.subscribe('notify', (error) => this.addNotif(error.message, error.type))
    }

    addNotif(message, type = 'info') {
        let newNotifs = this.state.notifs.slice()

        newNotifs.push({type: type, message: message})

        this.setState({notifs: newNotifs})
    }

    initItems(data) {
        let items = [];
        data.forEach((itemDatum) => items.push(Item.fromData(itemDatum)))

        return new ItemCollection(items);
    }

    onSelectedItem(item) {
        let newItems = this.state.items.popSlice(item)

        if (this.state.itemToConfigure) {
            newItems.push(this.state.itemToConfigure)
        }

        this.setState({items : newItems, itemToConfigure: item})
    }

    onCloseNotif() {
        let newNotifs = this.state.notifs.slice()

        newNotifs.shift()

        this.setState({notifs : newNotifs})
    }

    render() {
        return (
            <div id="content">
                <Notif notifs={this.state.notifs} onClose={() => this.onCloseNotif()} />
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
                                <ItemSelector bus={this.bus} items={this.state.items} onSelect={(item) => this.onSelectedItem(item)}/>
                            </Grid>
                        </Grid>
                    </Panel>
                </Container>
            </div>
        )
    }
}
