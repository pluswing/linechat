import { assert } from "chai";
import { describe, it } from "mocha";

import Message from "../../src/model/message";
import User from "../../src/model/user";
import MessageRepository from "../../src/repository/message";

describe("message", () => {
    it("store", () => {
        const user = new User("a");

        const r = new MessageRepository();
        r.store(new Message(user, "あいうえお"));

        assert.equal(1, r.userCount());
        assert.equal(1, r.messageCount());

        r.store(new Message(user, "あいうえお2"));

        assert.equal(1, r.userCount());
        assert.equal(2, r.messageCount());

    });
});
