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
        const message: Message = event.toMessage();
        if (!this.messageRepository.hasUser(message.user)) {
            const profile = await this.lineClient.getProfile(message.user.id);
            profile.fill(message.user);
        }
        this.messageRepository.store(message);
    }
}
