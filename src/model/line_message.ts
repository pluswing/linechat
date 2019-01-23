export default class LineMessage {
    public id: string;
    public type: string;
    public text: string;

    constructor(id: string, type: string, text: string) {
        this.id = id;
        this.type = type;
        this.text = text;
    }
}
