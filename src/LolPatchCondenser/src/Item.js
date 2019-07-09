export default class Item {

    /**
     * @param {String} id
     * @param {String} name
     * @param {String=} img
     * @param {String=} label prend la valeur de name par défaut
     */
    constructor(id, name, img = '', label = '') {
        this.id = id
        this.name = name
        this.img = img
        this.label = label ? label : name
    }

    static fromData(data) {
        return new Item(data.id, data.name, data.img, data.label)
    }

    is(item) {
        return item.id === this.id
    }
}
