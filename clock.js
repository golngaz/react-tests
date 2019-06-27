import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.tickId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tickId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    /**
     * Est un chiffre (et non un nombre)
     *
     * @param {Number} number
     */
    static isNumeral(number) {
        return number.toString().length === 1;
    }

    renderHour() {
        let hours = this.state.date.getHours();
        hours = Clock.isNumeral(hours) ? "0" + hours : hours.toString();

        let minutes = this.state.date.getMinutes();
        minutes = Clock.isNumeral(minutes) ? "0" + minutes : minutes.toString();

        let seconds = this.state.date.getSeconds();
        seconds = Clock.isNumeral(seconds) ? "0" + seconds : seconds.toString();

        return <b>{hours}:{minutes}:{seconds}</b>;
    }

    render() {
        return (
            <b>{this.renderHour()}</b>
        )
    }
}

export default Clock