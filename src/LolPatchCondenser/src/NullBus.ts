import BusInterface from './BusInterface'

export default class NullBus implements BusInterface
{
    subscribe(name: String, callback: CallableFunction): this
    {
        return this
    }

    /**
     * @todo finir et publish un truc qui va afficher un snack bar... (glados => 'the cake is a lie')
     * @param name
     * @param data
     */
    publish(name: String, data): this
    {
        return this
    }
}
