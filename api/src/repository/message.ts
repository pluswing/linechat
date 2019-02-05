import Message from "../model/message";
import User from "../model/user";

export default class MessageRepository {

    private userList: User[] = [];
    private messageList: Message[] = [];

    public store(message: Message) {
        this.messageList.push(message);
        if (!this.userList.find((u) => u.userId === message.user.userId)) {
            this.userList.push(message.user);
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

    public messages(user: User): Message[] {
        return this.messageList.filter((m) => m.user.equals(user));
    }

    public hasUser(user: User): boolean {
        return this.users().filter((u) => u.equals(user)).length !== 0;
    }
}
