export default class User {
    public userId: string = "";
    public name: string = "";
    public image: string = "";

    constructor(id: string) {
        this.userId = id;
    }

    public equals(user: User): boolean {
        return this.userId === user.userId;
    }
}
