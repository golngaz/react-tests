import BusInterface from './BusInterface'

export default class Bus implements BusInterface
{
    private readonly listeners: Array<{name: String, callback: CallableFunction}>

    constructor() {
        this.listeners = []
    }

    subscribe(name: String, callback: CallableFunction): this
    {
        this.listeners.push({name: name, callback: callback})

        return this
    }

    publish(name: String, data): this
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
