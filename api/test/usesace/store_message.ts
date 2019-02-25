import { assert } from "chai";
import { describe, it } from "mocha";
import Profile from "../../src/infra/model/Profile";
import LineMessage from "../../src/model/line_message";
import LineMessageEvent from "../../src/model/line_message_event";
import LineMessageSource from "../../src/model/line_message_source";
import Message from "../../src/model/message";
import User from "../../src/model/user";
import MessageRepository from "../../src/repository/message";
import StoreMessage from "../../src/usecase/store_message";

describe("usecase/store_message", () => {
    it("execute", async () => {
        const repo = new MessageRepository();
        const client = {
            getProfile: async (id: string): Promise<Profile> => {
                return new Profile("a", "profile_name", "profile_image");
            },
            push: async (toUserId: string, message: string): Promise<void> => {
                assert.fail("oops!");
                return;
            },
        };
        const u = new StoreMessage(repo, client);

        assert.equal(repo.userCount(), 0);
        assert.equal(repo.messageCount(), 0);

        await u.execute(
            new LineMessageEvent("reply_token", "text", 101,
                new LineMessageSource("user", "uid"),
                new LineMessage("mid", "text", "message_body"),
            ),
        );

        assert.equal(repo.userCount(), 1);
        assert.equal(repo.messageCount(), 1);
        const user = repo.users()[0];
        assert.equal(user.id, "uid");
        assert.equal(user.name, "profile_name");
        assert.equal(user.image, "profile_image");

        const msg = repo.receivedMessages(user)[0];
        assert.equal(msg.text, "message_body");
        assert.equal(msg.timestamp, 101);
        assert.equal(msg.fromUser.id, user.id);
        assert.equal(msg.toUser.id, user.id);
    });
});
