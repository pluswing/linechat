import User from "../../model/user";

export default class Profile {
    public id: string;
    public name: string;
    public image: string;

    constructor(id: string, name: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    public fill(user: User) {
        user.name = this.name;
        user.image = this.image;
    }
}
