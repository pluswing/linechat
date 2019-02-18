import moment from 'moment';

export default class User {
    public id: string = '123456';
    public name: string = 'ユーザ';
    public image: string = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
    public lastMessage: string = 'めっせーじ';
    public lastActions: string = 'received';
    public timestamp = new Date();
    public since() {
        return moment(this.timestamp).fromNow();
    }
}
