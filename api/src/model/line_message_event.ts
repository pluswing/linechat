import LineMessage from "./line_message";
import LineMessageSource from "./line_message_source";
import Message from "./message";
import User from "./user";

export default class LineMessageEvent {
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

    public toMessage(): Message {
        const m = Message.userMessage(new User(this.source.userId), this.message.text);
        m.timestamp = this.timestamp;
        return m;
    }
}
