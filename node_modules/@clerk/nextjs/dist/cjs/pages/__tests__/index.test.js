"use strict";
var import_expect_type = require("expect-type");
describe("ClerkProvider", () => {
  describe("Type tests", () => {
    describe("publishableKey and frontendApi", () => {
      it("expects children as the minimum accepted case", () => {
        (0, import_expect_type.expectTypeOf)({ children: "" }).toMatchTypeOf();
      });
      it("publishable key is replaceable with frontendApi", () => {
        (0, import_expect_type.expectTypeOf)({ frontendApi: "test", children: "" }).toMatchTypeOf();
      });
      it("does not error if no publishableKey or frontendApi", () => {
        (0, import_expect_type.expectTypeOf)({ children: "" }).toMatchTypeOf();
      });
    });
  });
  describe("Multi domain", () => {
    const defaultProps = { children: "" };
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
  describe("clerkJSVariant", () => {
    const defaultProps = { children: "" };
    it("is either headless or empty", () => {
      (0, import_expect_type.expectTypeOf)({ ...defaultProps, clerkJSVariant: "headless" }).toMatchTypeOf();
      (0, import_expect_type.expectTypeOf)({ ...defaultProps, clerkJSVariant: "" }).toMatchTypeOf();
      (0, import_expect_type.expectTypeOf)({ ...defaultProps, clerkJSVariant: void 0 }).toMatchTypeOf();
      (0, import_expect_type.expectTypeOf)({ ...defaultProps, clerkJSVariant: "test" }).not.toMatchTypeOf();
    });
  });
  describe("children", () => {
    it("errors if no children", () => {
      (0, import_expect_type.expectTypeOf)({}).not.toMatchTypeOf();
    });
  });
});
//# sourceMappingURL=index.test.js.map