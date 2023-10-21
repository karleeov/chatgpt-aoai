import { expectTypeOf } from "expect-type";
import { withClerkMiddleware } from "../withClerkMiddleware";
describe("withClerkMiddleware", () => {
  describe("Type tests", () => {
    describe("WithAuthOptions", () => {
      it("is the options argument for withClerkMiddleware", () => {
        () => {
          withClerkMiddleware({}, {});
        };
      });
      it("can receive the appropriate keys", () => {
        expectTypeOf({ publishableKey: "", secretKey: "" }).toMatchTypeOf();
        expectTypeOf({ frontendApi: "", secretKey: "" }).toMatchTypeOf();
        expectTypeOf({ publishableKey: "", apiKey: "" }).toMatchTypeOf();
        expectTypeOf({ frontendApi: "", apiKey: "" }).toMatchTypeOf();
      });
      describe("Multi domain", () => {
        const defaultProps = { publishableKey: "", secretKey: "" };
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
    });
  });
});
//# sourceMappingURL=withClerkMiddleware.test.js.map