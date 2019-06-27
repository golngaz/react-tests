import React from 'react';

class Case extends React.Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }

    render() {
        return (
            <div className="case" onClick={this.clicked}>{this.display()}</div>
        )
    }

    clicked() {
        if (this.props.value === 0) {
            this.props.onClick();
        }
    }

    display() {
        if (this.props.value === 1) {
            return "X";
        } else if (this.props.value === 2) {
            return "O";
        } else {
            return "";
        }
    }
}

export default Case