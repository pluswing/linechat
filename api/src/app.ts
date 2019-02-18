import * as line from "@line/bot-sdk";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import express from "express";
import LineAccessToken from "./entity/line_access_token";
import LineClient from "./infra/line_client";
import LineMessage from "./model/line_message";
import LineMessageEvent from "./model/line_message_event";
import LineMessageSource from "./model/line_message_source";
import User from "./model/user";
import MessageRepository from "./repository/message";
import StoreMessage from "./usecase/store_message";

dotenv.config();

const config = {
    channelSecret: process.env.CHANNEL_SECRET || "",
};

// init all
let client: line.Client;
new LineAccessToken().renew().then((channelAccessToken) => {
    client = new line.Client({ channelAccessToken, ...config });
});
const messageRepository = new MessageRepository();

const app = express();

// CORSを許可する
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/callback", line.middleware(config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then(() => res.json("{}"))
        .catch((err: Error) => {
            console.error(err);
            res.status(500).end();
        });
});

const handleEvent = async (ev: LineMessageEvent) => {
    console.log(ev);
    // FIXME 将来的には不要。
    if (ev.type !== "message" || ev.message.type !== "text") {
        // ignore non-text-message event
        return null;
    }
    // TODO store message
    const sm = new StoreMessage(messageRepository, new LineClient(client));
    const event = new LineMessageEvent(ev.replyToken, ev.type, ev.timestamp,
        new LineMessageSource(ev.source.type, ev.source.userId),
        new LineMessage(ev.message.id, ev.message.type, ev.message.text));
    await sm.execute(event);
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/users", async (req, res) => {
    const users = messageRepository.users();
    res.json({
        users,
    });
});

app.post("/messages", async (req, res) => {
    console.log(req.body);
    const userId = req.body.userId;
    const messages = messageRepository.messages(new User(userId));
    res.json({
        messages,
    });
});

// listen on port
const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
