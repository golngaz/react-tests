import Item from "./Item";

export default class ItemCollection
{
    private items: Array<Item>;

    constructor(items: Array<Item> = [])
    {
        // @todo restaurer le fonctionnement du loading en dehors du métier
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
        return new ItemCollection(this.items.filter(callback))
    }

    paginate(page: number = 0, nbByPages: number = 14): Array<Item>
    {
        return this.items.slice(page * nbByPages, (page * nbByPages) + nbByPages)
    }
}
