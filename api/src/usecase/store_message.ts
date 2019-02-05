import LineClient from "../infra/line_client";
import LineMessageEvent from "../model/line_message_event";
import Message from "../model/message";
import MessageRepository from "../repository/message";

export default class StoreMessage {
    private messageRepository: MessageRepository;
    private lineClient: LineClient;
    constructor(messageRepository: MessageRepository, lineClient: LineClient) {
        this.messageRepository = messageRepository;
        this.lineClient = lineClient;
    }

    public async execute(event: LineMessageEvent) {
        console.log("----");
        const message: Message = event.toMessage();
        console.log("====");
        if (!this.messageRepository.hasUser(message.user)) {
            console.log("!!!!");
            const profile = await this.lineClient.getProfile(message.user.userId);
            console.log(profile);
            profile.fill(message.user);
        }
        console.log(message);
        this.messageRepository.store(message);
    }
}
