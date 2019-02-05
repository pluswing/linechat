import { Client } from "@line/bot-sdk";
import ILineClient from "./iline_client";
import Profile from "./model/Profile";

export default class LineClient implements ILineClient {
    private client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    public async getProfile(userId: string): Promise<Profile> {
        const res = await this.client.getProfile(userId);
        return new Profile(res.userId, res.displayName, res.pictureUrl);
    }
}
