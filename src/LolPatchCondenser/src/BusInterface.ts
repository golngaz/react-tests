export default interface BusInterface
{
    subscribe(name: String, callback: CallableFunction): this

    publish(name: String, data): this
}