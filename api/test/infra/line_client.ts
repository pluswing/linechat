import { assert } from "chai";
import { describe, it } from "mocha";
import LineClient from "../../src/infra/line_client";
import Profile from "../../src/infra/model/Profile";
import User from "../../src/model/user";

describe("infra/line_client", () => {
    it("getProfile", async () => {
        // FIXME 実際にgetProfileを呼び出して結果が帰ってくるかのチェックをしたい。
        // const c = new LineClient();
        // assert.deepEqual(new Profile("", "", ""), await c.getProfile());
    });

    describe("model/profile", () => {
        it("fill", () => {
            const p = new Profile("", "hoge", "http://fuga");
            const u = new User("a");
            p.fill(u);
            assert.equal("a", u.id);
            assert.equal("hoge", u.name);
            assert.equal("http://fuga", u.image);
        });
    });
});
