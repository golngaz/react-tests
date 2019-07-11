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
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import Close from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: new ItemCollection(),
            itemToConfigure: null,
            error: false
        }

        this.bus = new Bus
    }

    componentDidMount() {
        axios.get(this.props.config.uri + 'data.json')
            .then((response) => this.setState({items: this.initItems(response.data)}))
            .catch(() => {
                this.setState({items: this.initItems([{id: 1, name: 'error', img: 'https://bit.ly/2JpL7oJ'}])})
            })

        this.bus.subscribe('error.raised', (error) => this.setState({error: error}))
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

    render() {
        return (
            <div id="content">
                {this.renderError()}
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

    renderError() {
        function CustomSlide(props) {return <Slide {...props} style={{backgroundColor: '#d32f2f'}} direction="down" />}

        return (
            <Snackbar
                onClose={() => {this.setState({error: false})}}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={!!this.state.error}
                TransitionComponent={CustomSlide}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                autoHideDuration={5000}
                message={<span style={{display: 'flex', alignItems: 'center'}} id="message-id">
                    <ErrorIcon /><span style={{paddingLeft: '10px'}}>{this.state.error && this.state.error.message || ''}</span>
                </span>}
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit">
                        <Close />
                    </IconButton>,
                ]}
            />
        )
    }
}
