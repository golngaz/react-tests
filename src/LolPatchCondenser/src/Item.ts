export default class Item {
    public readonly id: number
    public readonly name: String
    public readonly img: String
    public readonly label: String
    public readonly keywords: Array<String>
    public readonly type?: String

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
