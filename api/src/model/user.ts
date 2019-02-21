export default class User {
    public id: string = "";
    public name: string = "";
    public image: string = "";

    constructor(id: string) {
        this.id = id;
    }

    public equals(user: User): boolean {
        return this.id === user.id;
    }
}
