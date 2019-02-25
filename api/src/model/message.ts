import Operator from "./operator";
import User from "./user";

export default class Message {

    public static operatorMessage(operator: Operator, toUser: User, message: string): Message {
        return new Message(operator.user, toUser, message);
    }

    public static userMessage(user: User, message: string): Message {
        return new Message(user, user, message);
    }

    public fromUser: User;
    public toUser: User;
    public timestamp: number = 0;
    public text: string = "";

    private constructor(fromUser: User, toUser: User, text: string) {
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.text = text;
    }
}
