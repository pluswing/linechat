import * as line from "@line/bot-sdk";
import { assert } from "chai";
import express from "express";

const config = {
    channelAccessToken: TOKEN,
    channelSecret: SECRET,
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
    // FIXME 将来的には不要。
    if (event.type !== "message" || event.message.type !== "text") {
        // ignore non-text-message event
        return null;
    }
    // TODO store message
};
