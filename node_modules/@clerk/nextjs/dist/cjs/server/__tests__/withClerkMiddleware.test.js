"use strict";
var import_expect_type = require("expect-type");
var import_withClerkMiddleware = require("../withClerkMiddleware");
describe("withClerkMiddleware", () => {
  describe("Type tests", () => {
    describe("WithAuthOptions", () => {
      it("is the options argument for withClerkMiddleware", () => {
        () => {
          (0, import_withClerkMiddleware.withClerkMiddleware)({}, {});
        };
      });
      it("can receive the appropriate keys", () => {
        (0, import_expect_type.expectTypeOf)({ publishableKey: "", secretKey: "" }).toMatchTypeOf();
        (0, import_expect_type.expectTypeOf)({ frontendApi: "", secretKey: "" }).toMatchTypeOf();
        (0, import_expect_type.expectTypeOf)({ publishableKey: "", apiKey: "" }).toMatchTypeOf();
        (0, import_expect_type.expectTypeOf)({ frontendApi: "", apiKey: "" }).toMatchTypeOf();
      });
      describe("Multi domain", () => {
        const defaultProps = { publishableKey: "", secretKey: "" };
        it("proxyUrl (primary app)", () => {
          (0, import_expect_type.expectTypeOf)({ ...defaultProps, proxyUrl: "test" }).toMatchTypeOf();
        });
        it("proxyUrl + isSatellite (satellite app)", () => {
          (0, import_expect_type.expectTypeOf)({ ...defaultProps, proxyUrl: "test", isSatellite: true }).toMatchTypeOf();
        });
        it("domain + isSatellite (satellite app)", () => {
          (0, import_expect_type.expectTypeOf)({ ...defaultProps, domain: "test", isSatellite: true }).toMatchTypeOf();
        });
        it("only domain is not allowed", () => {
          (0, import_expect_type.expectTypeOf)({ ...defaultProps, domain: "test" }).not.toMatchTypeOf();
        });
        it("only isSatellite is not allowed", () => {
          (0, import_expect_type.expectTypeOf)({ ...defaultProps, isSatellite: true }).not.toMatchTypeOf();
        });
        it("proxyUrl + domain is not allowed", () => {
          (0, import_expect_type.expectTypeOf)({ ...defaultProps, proxyUrl: "test", domain: "test" }).not.toMatchTypeOf();
        });
        it("proxyUrl + domain + isSatellite is not allowed", () => {
          (0, import_expect_type.expectTypeOf)({
            ...defaultProps,
            proxyUrl: "test",
            domain: "test",
            isSatellite: true
          }).not.toMatchTypeOf();
        });
      });
    });
  });
});
//# sourceMappingURL=withClerkMiddleware.test.js.map