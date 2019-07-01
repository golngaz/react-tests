import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.title = `Vous avez cliqué ${this.state.count} fois`;
    }
    componentDidUpdate() {
        document.title = `Vous avez cliqué ${this.state.count} fois`;
    }
    handleClick() {
        this.setState(state => ({
            count: state.count + 1,
        }));
    }
    render() {
        return (
            <div>
                <p>Vous avez cliqué {this.state.count} fois</p>
                <button onClick={this.handleClick}>
                    Cliquez ici
                </button>
            </div>
        );
    }
}
