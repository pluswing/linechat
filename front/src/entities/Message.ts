import moment from 'moment';

export default class Message {
    public id: string = '';
    public message: string = '';

    // user情報を展開しておく
    public operator: boolean = false;
    public name: string = '';
    public image: string = '';
    public timestamp = new Date();
    public since() {
        return moment(this.timestamp).fromNow();
    }
}
