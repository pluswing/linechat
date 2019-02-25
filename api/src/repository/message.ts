import Message from "../model/message";
import User from "../model/user";

export default class MessageRepository {

    private userList: User[] = [];
    private messageList: Message[] = [];

    public store(message: Message) {
        this.messageList.push(message);
        if (!this.userList.find((u) => u.equals(message.fromUser))) {
            this.userList.push(message.fromUser);
        }
        if (!this.userList.find((u) => u.equals(message.toUser))) {
            this.userList.push(message.toUser);
        }
    }

    public userCount(): number {
        return this.userList.length;
    }

    public messageCount(): number {
        return this.messageList.length;
    }

    public users(): User[] {
        return this.userList;
    }

    public receivedMessages(user: User): Message[] {
        return this.messageList.filter((m) => m.toUser.equals(user));
    }

    public hasUser(user: User): boolean {
        return this.users().filter((u) => u.equals(user)).length !== 0;
    }
}
