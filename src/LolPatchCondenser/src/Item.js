export default class Item {

    /**
     * @param {String} id
     * @param {String} name
     * @param {String=} img
     * @param {String=} label prend la valeur de name par défaut
     * @param {Array=} keywords
     */
    constructor(id, name, img = '', label = '', keywords = []) {
        this.id = id
        this.name = name
        this.img = img
        this.label = label ? label : name
        this.keywords = keywords
    }

    static fromData(data) {
        return new Item(data.id, data.name, data.img, data.label, data.keywords)
    }

    is(item) {
        return item.id === this.id
    }
}
