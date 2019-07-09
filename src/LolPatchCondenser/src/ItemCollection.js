export default class ItemCollection {

    /**
     * @param {Item[]=} items
     */
    constructor(items) {
        this.needToLoad = items === undefined;

        this.items = items ? items : []
    }

    has(itemToHas) {
        return this.items.some((item) => itemToHas.is(item))
    }

    /**
     * Pop un élément et renvoie le nouveau tableau
     *
     * @param {Item} itemToPop
     * @return {ItemCollection}
     */
    popSlice(itemToPop) {
        return new ItemCollection(this.items.filter((item) => !itemToPop.is(item)))
    }

    filter(callback) {
        return new ItemCollection(this.items.filter(callback))
    }

    /**
     * @param {Number=0} page
     * @param {Number=14} nbByPages
     * @return {Item[]}
     */
    paginate(page = 0, nbByPages = 14) {
        return this.items.slice(page * nbByPages, (page * nbByPages) + nbByPages)
    }

    getNbPage(nbByPages) {
        let div = this.items.length/nbByPages;
        let floor = Math.floor(div);

        return floor + (div > floor ? 0 : -1)
    }
}
