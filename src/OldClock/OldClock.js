import React from 'react'
import './OldClock.scss'
import Needle from "./Needle";

export default class OldClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
            tickId: null,
        }
    }

    componentDidMount() {
        let tickId = setInterval(() => this.setState({time: new Date}), 1000)

        this.setState({tickId: tickId})
    }

    componentWillUnmount() {
        clearInterval(this.state.tickId)
    }

    render() {
        return (
            <div
                className="old-clock"
                title={this.state.time.toLocaleString("fr-FR", {timeZone: "Europe/Paris"})}
                style={{
                    width: this.props.width,
                    height: this.props.height ? this.props.height: this.props.width,
                    display: this.props.display,
                }}
                >
                <div className="base">
                    <div className="needles-container">
                        <Needle thickness="1" length="90" degrees={OldClock.calculateDegrees(this.state.time.getSeconds(), 60)} color="red"/>
                        <Needle thickness="3" length="70" degrees={OldClock.calculateDegrees(this.state.time.getMinutes(), 60)}/>
                        <Needle thickness="5" length="50" degrees={OldClock.calculateDegrees(this.state.time.getHours(), 12)} />
                    </div>
                </div>
            </div>
        )
    }

    /**
     * @param {Number} time
     * @param {Number} base exemple : 24 for hour
     */
    static calculateDegrees(time, base) {
        return ((time*360) / base) - 90
    }
}

OldClock.defaultProps = {
    width: '500px',
    display: 'block'
}