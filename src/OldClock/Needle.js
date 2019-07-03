import React from 'react'

export default class Needle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="needle" style={this.calculateStyle()}/>
    }

    calculateStyle() {
        let width = this.props.length.toString() + '%'
        let height = this.props.thickness.toString() + 'px'

        return {
            marginTop: -(this.props.thickness) / 2,
            width: width,
            height: height,
            backgroundColor: this.props.color,
            transformOrigin: '0% 50%',
            transform: 'rotate('+this.props.degrees.toString()+'deg)',
        }
    }
}

Needle.defaultProps = {
    color: 'black',
    degrees: 0,
}