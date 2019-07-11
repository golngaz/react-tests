import Item from './Item'

export default class ItemCollection
{
    private readonly items: Array<Item>

    constructor(items: Array<Item> = [])
    {
        this.items = items
    }

    has(itemToHas: Item): boolean
    {
        return this.items.some((item: Item) => itemToHas.is(item))
    }

    /**
     * Pop un élément et renvoie le nouveau tableau
     */
    popSlice(itemToPop: Item): ItemCollection
    {
        return new ItemCollection(this.items.filter((item) => !itemToPop.is(item)))
    }

    filter(callback: Function): ItemCollection
    {
        // @ts-ignore
        return new ItemCollection(this.items.filter(callback))
    }

    length(): number
    {
        return this.items.length
    }

    isEmpty(): boolean
    {
        return this.items.length === 0
    }

    map<U>(callback: () => U, thisArg?: any): Array<U>
    {
        return this.items.map(callback, thisArg)
    }

    paginate(page: number = 0, nbByPages: number = 14): ItemCollection
    {
        let chunk = page * nbByPages

        return new ItemCollection(this.items.slice(chunk, chunk + nbByPages))
    }

    /**
     * Trie la collection actuelle sans renvoyer de nouvelle instance
     */
    sortByName(): this
    {
        this.items.sort((item: Item, itemNext: Item) => {
            const a = item.name.toLowerCase()
            const b = itemNext.name.toLowerCase()

            return a > b ? 1 : (a < b ? -1 : 0)
        })

        return this
    }

    push(item: Item): this
    {
        this.items.push(item)

        return this
    }
}
