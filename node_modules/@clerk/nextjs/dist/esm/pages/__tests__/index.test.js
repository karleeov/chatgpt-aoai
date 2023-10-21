import { expectTypeOf } from "expect-type";
describe("ClerkProvider", () => {
  describe("Type tests", () => {
    describe("publishableKey and frontendApi", () => {
      it("expects children as the minimum accepted case", () => {
        expectTypeOf({ children: "" }).toMatchTypeOf();
      });
      it("publishable key is replaceable with frontendApi", () => {
        expectTypeOf({ frontendApi: "test", children: "" }).toMatchTypeOf();
      });
      it("does not error if no publishableKey or frontendApi", () => {
        expectTypeOf({ children: "" }).toMatchTypeOf();
      });
    });
  });
  describe("Multi domain", () => {
    const defaultProps = { children: "" };
    it("proxyUrl (primary app)", () => {
      expectTypeOf({ ...defaultProps, proxyUrl: "test" }).toMatchTypeOf();
    });
    it("proxyUrl + isSatellite (satellite app)", () => {
      expectTypeOf({ ...defaultProps, proxyUrl: "test", isSatellite: true }).toMatchTypeOf();
    });
    it("domain + isSatellite (satellite app)", () => {
      expectTypeOf({ ...defaultProps, domain: "test", isSatellite: true }).toMatchTypeOf();
    });
    it("only domain is not allowed", () => {
      expectTypeOf({ ...defaultProps, domain: "test" }).not.toMatchTypeOf();
    });
    it("only isSatellite is not allowed", () => {
      expectTypeOf({ ...defaultProps, isSatellite: true }).not.toMatchTypeOf();
    });
    it("proxyUrl + domain is not allowed", () => {
      expectTypeOf({ ...defaultProps, proxyUrl: "test", domain: "test" }).not.toMatchTypeOf();
    });
    it("proxyUrl + domain + isSatellite is not allowed", () => {
      expectTypeOf({
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
      expectTypeOf({ ...defaultProps, clerkJSVariant: "headless" }).toMatchTypeOf();
      expectTypeOf({ ...defaultProps, clerkJSVariant: "" }).toMatchTypeOf();
      expectTypeOf({ ...defaultProps, clerkJSVariant: void 0 }).toMatchTypeOf();
      expectTypeOf({ ...defaultProps, clerkJSVariant: "test" }).not.toMatchTypeOf();
    });
  });
  describe("children", () => {
    it("errors if no children", () => {
      expectTypeOf({}).not.toMatchTypeOf();
    });
  });
});
//# sourceMappingURL=index.test.js.map