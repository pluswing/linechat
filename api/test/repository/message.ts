import { assert } from "chai";
import { describe, it } from "mocha";

import Message from "../../src/model/message";
import User from "../../src/model/user";
import MessageRepository from "../../src/repository/message";

describe("repository/message", () => {
    it("store", () => {
        const user = new User("a");

        const r = new MessageRepository();
        r.store(Message.userMessage(user, "あいうえお"));

        assert.equal(1, r.userCount());
        assert.equal(1, r.messageCount());

        r.store(Message.userMessage(user, "あいうえお2"));

        assert.equal(1, r.userCount());
        assert.equal(2, r.messageCount());

    });

    it("users", () => {
        const u1 = new User("a");
        const u2 = new User("b");

        const r = new MessageRepository();

        r.store(Message.userMessage(u1, ""));
        r.store(Message.userMessage(u2, ""));

        assert.equal(2, r.users().length);
        // FIXME
        // assert.equal([u1, u2], r.users());
    });

    it("receivedMessages", () => {
        const u1 = new User("a");
        const u2 = new User("b");

        const r = new MessageRepository();

        r.store(Message.userMessage(u1, "1"));
        r.store(Message.userMessage(u2, "2"));
        r.store(Message.userMessage(u1, "3"));

        assert.equal(2, r.receivedMessages(u1).length);
        assert.equal(1, r.receivedMessages(u2).length);
    });

    it("hasUser", () => {
        const u1 = new User("a");

        const r = new MessageRepository();

        r.store(Message.userMessage(u1, "1"));

        assert.isTrue(r.hasUser(u1));
        assert.isFalse(r.hasUser(new User("b")));
    });
});
