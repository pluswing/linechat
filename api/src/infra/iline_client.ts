import Profile from "./model/Profile";

export default interface ILineClient {
    getProfile(userId: string): Promise<Profile>;
    push(toUserId: string, message: string): Promise<void>;
}
