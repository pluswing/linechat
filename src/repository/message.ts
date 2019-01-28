import Message from "../model/message";
import User from "../model/user";

export default class MessageRepository {

    private users: User[] = [];
    private messages: Message[] = [];

    public store(message: Message) {
        this.messages.push(message);
        if (!this.users.find((u) => u.userId === message.user.userId)) {
            this.users.push(message.user);
        }
    }

    public userCount(): number {
        return this.users.length;
    }

    public messageCount(): number {
        return this.messages.length;
    }
}
