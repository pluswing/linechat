import { assert } from "chai";
import { describe, it } from "mocha";
import Profile from "../../src/infra/model/Profile";
import Message from "../../src/model/message";
import Operator from "../../src/model/operator";
import User from "../../src/model/user";
import MessageRepository from "../../src/repository/message";
import PushMessage from "../../src/usecase/push_message";

describe("usecase/push_message", () => {
    it("execute", async () => {
        const repo = new MessageRepository();
        const client = {
            getProfile: async (id: string): Promise<Profile> => {
                assert.fail("oops!");
                return new Profile("", "", "");
            },
            push: async (toUserId: string, message: string): Promise<void> => {
                assert.equal(toUserId, "userid");
                assert.equal(message, "message_body");
                return;
            },
        };
        const u = new PushMessage(client, repo);

        assert.equal(repo.userCount(), 0);
        assert.equal(repo.messageCount(), 0);

        await u.execute(
            Message.operatorMessage(
                new Operator(0, new User("o")),
                new User("userid"),
                "message_body",
            ),
        );

        assert.equal(repo.userCount(), 2);
        assert.equal(repo.messageCount(), 1);
    });
});
