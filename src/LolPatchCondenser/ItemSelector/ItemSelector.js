import React from "react";
import Panel from "../Panel";
import ListItems from "./ListItems";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';

export default class ItemSelector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {page: 0, search : ''}

        this.nbByPage = 10
    }

    onSelect(item) {
        this.props.onSelect && this.props.onSelect(item)
    }

    render() {
        return (
            <Panel style={{height: '100%'}}>
                {this.renderSearch()}
                <ListItems onSelect={(item) => this.onSelect(item)} items={this.calculateItems()} />
                {this.renderPagination()}
            </Panel>
        )
    }

    handleChange(e) {
        this.setState({});
    }

    calculateItems() {
        return this.props.items.filter((itemData) => {
            return itemData.name.toLocaleLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }).paginate(this.state.page, this.nbByPage)
    }

    changePage(page) {
        this.setState({page: page})
    }

    renderPagination() {
        return (
            <Grid container justify="center" spacing={2}>
                <Grid item xs={2}>
                    <Button onClick={() => this.decreasePage()}>{'<'}</Button>
                </Grid>
                <Grid item xs={2}>
                    <Input value={this.state.page} className="input-page" onChange={(e) => this.changePage(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={() => this.increasePage()}>{'>'}</Button>
                </Grid>
            </Grid>
        )
    }

    increasePage() {
        if (this.state.page + 1 > this.props.items.getNbPage(this.nbByPage)) {
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

    renderSearch() {
        return (
            <Grid container>
                <Grid item xs={1}>
                    <SearchIcon />
                </Grid>
                <Grid item xs={11}>
                    <Input className="search-item" onChange={(e) => this.setState({search: e.currentTarget.value, page: 0})}/>
                </Grid>
            </Grid>
        )

    }
}