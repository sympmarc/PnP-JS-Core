"use strict";

import { expect } from "chai";
import { Web } from "../web";

describe("Web", () => {
    it("Should be an object", () => {
        let web = new Web("_api");
        expect(web).to.be.a("object");
    });
    describe("url", () => {
        it("Should return _api/web", () => {
            let web = new Web("_api");
            expect(web.toUrl()).to.equal("_api/web");
        });
    });
});
