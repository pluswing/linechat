import { assert } from "chai";
import { describe, it } from "mocha";
import LineAccessToken from "../../src/entity/line_access_token";

import * as dotenv from "dotenv";
dotenv.config();

describe("entity/line_access_token", () => {
    it("env", () => {
        assert.isTrue(process.env.CHANNEL_ID !== undefined);
        assert.isTrue(process.env.CHANNEL_SECRET !== undefined);
    });
    it("renew", async () => {
        const l = new LineAccessToken();
        assert.isNull(l.get());
        assert.isNotNull(await l.renew());
        assert.isNotNull(l.get());
    });
});
