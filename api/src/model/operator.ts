import User from "./user";

export default class Operator {
    public id: number;
    public loginId: string = "";
    public password: string = "";
    public user: User;

    constructor(id: number, user: User) {
        this.id = id;
        this.user = user;
        this.user.operatorId = id;
    }

    public equals(user: Operator): boolean {
        return this.id === user.id;
    }
}
