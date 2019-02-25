import ILineClient from "../infra/iline_client";
import Message from "../model/message";
import Operator from "../model/operator";
import User from "../model/user";
import MessageRepository from "../repository/message";

export default class PushMessage {
    private lineClient: ILineClient;
    private messageRepository: MessageRepository;
    constructor(lineClient: ILineClient, messageRepository: MessageRepository) {
        this.lineClient = lineClient;
        this.messageRepository = messageRepository;
    }

    public async execute(operatorMessage: Message) {
        await this.lineClient.push(operatorMessage.toUser.id, operatorMessage.text);
        operatorMessage.timestamp = new Date().getTime();
        this.messageRepository.store(operatorMessage);
    }
}
