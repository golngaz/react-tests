export default class Item {
    private readonly id: number;
    private readonly name: String;
    private readonly img: String;
    private readonly label: String;
    private readonly keywords: Array<String>;
    private readonly type?: String;

    constructor(id: number, name: String, img: String = '', label: String = '', type: 'champion'|'item' = 'item', keywords: Array<String> = [])
    {
        this.id = id
        this.name = name
        this.img = img
        this.label = label ? label : name
        this.type = type
        this.keywords = keywords
    }

    static fromData(data: {id: number, name: String, img?: String, label?: String, type: 'champion'|'item', keywords?: Array<String>}): Item
    {
        return new Item(data.id, data.name, data.img, data.label, data.type, data.keywords)
    }

    is(item: Item): boolean
    {
        return item.id === this.id
    }
}
