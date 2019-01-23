class LineMessageEvent {
    public replyToken: string;
    public type: string;
    public timestamp: number;
    public source: LineMessageSource;
    public message: LineMessage;

    constructor(replyToken: string, type: string, timestamp: number, source: LineMessageSource, message: LineMessage) {
        this.replyToken = replyToken;
        this.type = type;
        this.timestamp = timestamp;
        this.source = source;
        this.message = message;
    }
}
