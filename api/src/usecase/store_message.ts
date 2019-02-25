import ILineClient from "../infra/iline_client";
import LineMessageEvent from "../model/line_message_event";
import Message from "../model/message";
import MessageRepository from "../repository/message";

export default class StoreMessage {
    private messageRepository: MessageRepository;
    private lineClient: ILineClient;
    constructor(messageRepository: MessageRepository, lineClient: ILineClient) {
        this.messageRepository = messageRepository;
        this.lineClient = lineClient;
    }

    public async execute(event: LineMessageEvent) {
        const message: Message = event.toMessage();
        if (!this.messageRepository.hasUser(message.fromUser)) {
            const profile = await this.lineClient.getProfile(message.fromUser.id);
            profile.fill(message.fromUser);
        }
        this.messageRepository.store(message);
    }
}
