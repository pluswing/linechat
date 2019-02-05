import * as line from "@line/bot-sdk";
import * as dotenv from "dotenv";
import express from "express";
import LineAccessToken from "./entity/line_access_token";
import LineMessageEvent from "./model/line_message_event";

dotenv.config();

const config = {
    channelSecret: process.env.CHANNEL_SECRET || "",
};

const app = express();

app.post("/callback", line.middleware(config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then(() => res.json("{}"))
        .catch((err: Error) => {
            res.status(500).end();
        });
});

const handleEvent = async (event: LineMessageEvent) => {
    console.log(event);
    // FIXME 将来的には不要。
    if (event.type !== "message" || event.message.type !== "text") {
        // ignore non-text-message event
        return null;
    }
    // TODO store message
    const at = new LineAccessToken();
    const channelAccessToken = await at.renew();
    const client = new line.Client({ channelAccessToken, ...config });
    const profile = await client.getProfile(event.source.userId);
    console.log(profile);
};

// listen on port
const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
