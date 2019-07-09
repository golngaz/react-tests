export default class Item {
    private readonly id: String;
    private readonly name: String;
    private readonly img: String;
    private readonly label: String;
    private readonly keywords: Array<String>;

    /**
     * @param {String} id
     * @param {String} name
     * @param {String=} img
     * @param {String=} label prend la valeur de name par défaut
     * @param {Array=} keywords
     */
    constructor(id: String, name: String, img: String = '', label: String = '', keywords: Array<String> = []) {
        this.id = id
        this.name = name
        this.img = img
        this.label = label ? label : name
        this.keywords = keywords
    }

    static fromData(data) {
        return new Item(data.id, data.name, data.img, data.label, data.keywords)
    }

    is(item: Item) {
        return item.id === this.id
    }
}
