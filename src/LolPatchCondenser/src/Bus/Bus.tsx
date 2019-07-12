import BusInterface from './BusInterface'
import * as React from "react";

export default class Bus implements BusInterface
{
    private readonly listeners: Array<{name: String, callback: CallableFunction}>

    private static instance: Bus

    private constructor() {
        this.listeners = []
    }

    public static getInstance()
    {
        if (!Bus.instance) {
            Bus.instance = new Bus
        }

        return Bus.instance
    }

    public subscribe(name: String, callback: CallableFunction): this
    {
        this.listeners.push({name: name, callback: callback})

        return this
    }

    public publish(name: String, data): this
    {
        for (let listener of this.listeners) {
            if (listener.name === name) {
                this.async(listener.callback, [data])()
            }
        }

        return this
    }

    private async(callback, params: Array<any>): CallableFunction
    {
        return () => setTimeout(callback, 0, ...params)
    }
}

export const withBus = () => (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            const {children, ...others} = this.props

            // @ts-ignore
            const childrenWithBus = React.Children.map(children, child => React.cloneElement(child, { bus: bus }));

            return <Component bus={Bus.getInstance()} {...others}>{childrenWithBus}</Component>
        }
    }
}