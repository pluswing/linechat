export default class User {
    public id: string = "";
    public name: string = "";
    public image: string = "";
    public operatorId: number | null = null;

    constructor(id: string) {
        this.id = id;
    }

    public isOperator(): boolean {
        return this.operatorId != null;
    }

    public equals(user: User): boolean {
        return this.id === user.id;
    }
}
