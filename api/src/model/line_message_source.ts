export default class LineMessageSource {
    public type: string;
    public userId: string;
    constructor(type: string, userId: string) {
        this.type = type;
        this.userId = userId;
    }
}
