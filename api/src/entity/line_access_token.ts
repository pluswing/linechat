import axios from "axios";
import qs from "qs";

export default class LineAccessToken {
    private accessToken: string | null = null;

    public get() {
        return this.accessToken;
    }

    public async renew() {
        const credentials = {
            client_id: process.env.CHANNEL_ID,
            client_secret: process.env.CHANNEL_SECRET,
            grant_type: "client_credentials",
        };
        const config = {
            data: qs.stringify(credentials),
            method: "post",
            url: "https://api.line.me/v2/oauth/accessToken",
        };

        const res = await axios(config);
        const at = res.data.access_token;
        this.accessToken = at;
        return at;
    }
}
