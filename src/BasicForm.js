import React from 'react'

export default class BasicForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {value: ''}
    }

    render() {
        return (
            <div>
                <span>{this.renderResult()}</span>
                <input type="text" onChange={(e) => this.inputChanged(e)}/>
            </div>
        )
    }

    renderResult() {
        return this.state.value.split('').reverse().join('')
    }

    inputChanged(e) {
        this.setState({value: e.currentTarget.value})
    }
}
