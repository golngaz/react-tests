import React from 'react'

export default class PageInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {value: this.props.page}
    }

    render() {
        return (
            <input value={this.state.value} onChange={(e) => this.onChange(e.currentTarget.value)}/>
        );
    }

    //componentDidUpdate(prevProps, prevState, snapshot) {
    //    this.props.onChange && this.props.onChange('15')
    //}

    onChange(value) {
        this.props.onChange && this.props.onChange(value)
    }
}