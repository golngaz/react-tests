import React from 'react'
import Panel from '../Panel'
import ListItems from './ListItems'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import PropTypes from 'prop-types'
import ItemCollection from '../src/ItemCollection'
import NullBus from '../src/NullBus'

export default class ItemSelector extends React.Component {
    constructor(props) {
        super(props)

        this.bus = this.props.bus ? this.props.bus : new NullBus

        this.state = {page: 0, search: '', type: 'all'}

        this.nbByPage = 10
    }

    getNbPage() {
        let div = this.itemsFiltered().length() / this.nbByPage;
        let floor = Math.floor(div);

        return floor + (div > floor ? 0 : -1)
    }

    onSelect(item) {
        this.props.onSelect && this.props.onSelect(item)
    }

    onSearch(search) {
        this.setState({search: search, page: 0})

        if (search === 'glados') {
            this.bus.publish('error.raised', {message: 'the cake is a lie'})
        }
    }

    /**
     * Renvoie les items filtrés par la recherche
     *
     * @return {ItemCollection}
     */
    itemsFiltered() {
        let search = this.state.search.toLowerCase();

        let searchFilter = (item) => item.name.toLocaleLowerCase().indexOf(search) !== -1 || item.keywords.some((keyword) => keyword.indexOf(search) !== -1)
        let typeFilter = (item) => this.state.type === 'all' || this.state.type === item.type

        return this.props.items.filter((item) => {
            return searchFilter(item) && typeFilter(item)
        })
    }

    changePage(page) {
        this.setState({page: page})
    }

    increasePage() {
        if (this.state.page + 1 > this.getNbPage()) {
            return
        }

        this.setState({page : ++this.state.page})
    }

    decreasePage() {
        if (this.state.page - 1 < 0) {
            return
        }

        this.setState({page : --this.state.page})
    }

    render() {
        return (
            <Panel style={{height: '100%'}}>
                {this.renderSearch()}
                <ListItems
                    isLoading={this.props.items.isEmpty()}
                    onSelect={(item) => this.onSelect(item)}
                    items={this.itemsFiltered().sortByName().paginate(this.state.page, this.nbByPage)}
                    />
                {this.renderPagination()}
            </Panel>
        )
    }

    renderSearch() {
        return (
            <Grid container>
                <Grid item xs={1}>
                    <SearchIcon />
                </Grid>
                <Grid item xs={7}>
                    <Input className="search-item" onChange={(e) => this.onSearch(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={4} style={{textAlign: 'center'}}>
                    <FormControl style={{margin: '-16px'}}>
                        <InputLabel>Type</InputLabel>
                        <Select
                            value={this.state.type}
                            onChange={(e) => {this.setState({type: e.target.value, page: 0})}}
                            name="age"
                        >
                            <MenuItem value="all">Tous</MenuItem>
                            <MenuItem value="item">Items</MenuItem>
                            <MenuItem value="champion">Champions</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )

    }

    renderPagination() {
        return (
            <Grid container justify="center" spacing={2}>
                <Grid item xs={2}>
                    <Button onClick={() => this.decreasePage()}>{'<'}</Button>
                </Grid>
                <Grid item xs={2}>
                    <Input value={this.state.page} className="input-page" onChange={(e) => this.changePage(parseInt(e.target.value))}/>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => this.increasePage()}>{'>'}</Button>
                </Grid>
            </Grid>
        )
    }
}

ListItems.propTypes = {
    items: PropTypes.instanceOf(ItemCollection),
}