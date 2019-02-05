import { assert } from "chai";
import { describe, it } from "mocha";
import LineMessage from "../../src/model/line_message";
import LineMessageEvent from "../../src/model/line_message_event";
import LineMessageSource from "../../src/model/line_message_source";
import Message from "../../src/model/message";
import User from "../../src/model/user";

describe("model/LineMessageEvent", () => {
    it("toMessage", () => {
        const e = new LineMessageEvent("", "", 100,
            new LineMessageSource("", "hoge"),
            new LineMessage("", "", "fugafuga"));
        const message = e.toMessage();

        const m = new Message(new User("hoge"), "fugafuga");
        m.timestamp = 100;
        assert.deepEqual(m, message);

    });
});
