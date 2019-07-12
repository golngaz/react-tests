export const PatchLineValue = {
    HARD_NERF : 'hardNerf',
    NERF      : 'nerf',
    BALANCE   : 'balance',
    BUFF      : 'buff',
    GOOD_BUFF : 'goodBuff',
}

export default class PatchLine
{
    private name: String;
    private value: String;
    private img: String;
    private description: String;

    constructor(name: String, value:'hardNerf'|'nerf'|'balance'|'buff'|'goodBuff', imgSrc: String = 'https://banner2.kisspng.com/20171218/621/question-mark-png-5a3813d34eadf5.2716127515136245313223.jpg', description: String = '') {
        this.name = name
        this.value = value
        this.img = imgSrc
        this.description = description
    }
}
