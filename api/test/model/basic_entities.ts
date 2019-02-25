import { assert } from "chai";
import { describe, it } from "mocha";
import Message from "../../src/model/message";
import Operator from "../../src/model/operator";
import User from "../../src/model/user";

describe("model/user", () => {
    it("equals", () => {
        const u = new User("1");
        assert.isTrue(u.equals(u));
        assert.isTrue(u.equals(new User("1")));
        assert.isFalse(u.equals(new User("2")));
        assert.isFalse(u.isOperator());
    });
});

describe("model/operator", () => {
    it("user/operatorId", () => {
        const o = new Operator(1, new User("1"));
        assert.equal(o.user.operatorId, 1);
        assert.isTrue(o.user.isOperator());
    });
    it("equals", () => {
        const o = new Operator(1, new User("1"));
        assert.isTrue(o.equals(o));
        assert.isTrue(o.equals(new Operator(1, new User("1"))));
        assert.isFalse(o.equals(new Operator(2, new User("1"))));
    });

});

describe("model/message", () => {
    it("operatorMessage", () => {
        const m = Message.operatorMessage(new Operator(1, new User("u")), new User("u2"), "aaaaa");
        assert.equal(m.text, "aaaaa");
        assert.equal(m.fromUser.operatorId, 1);
        assert.equal(m.toUser.id, "u2");
    });
    it("userMessage", () => {
        const m = Message.userMessage(new User("u"), "aaaaa");
        assert.equal(m.text, "aaaaa");
        assert.equal(m.fromUser, m.toUser);
    });
});
