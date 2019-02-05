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

    it("users", () => {
        const u1 = new User("a");
        const u2 = new User("b");

        const r = new MessageRepository();

        r.store(new Message(u1, ""));
        r.store(new Message(u2, ""));

        assert.equal(2, r.users().length);
        // FIXME
        // assert.equal([u1, u2], r.users());
    });

    it("messages", () => {
        const u1 = new User("a");
        const u2 = new User("b");

        const r = new MessageRepository();

        r.store(new Message(u1, "1"));
        r.store(new Message(u2, "2"));
        r.store(new Message(u1, "3"));

        assert.equal(2, r.messages(u1).length);
        assert.equal(1, r.messages(u2).length);
    });

    it("hasUser", () => {
        const u1 = new User("a");

        const r = new MessageRepository();

        r.store(new Message(u1, "1"));

        assert.isTrue(r.hasUser(u1));
        assert.isFalse(r.hasUser(new User("b")));
    });
});
