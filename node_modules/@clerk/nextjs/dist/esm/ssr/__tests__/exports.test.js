import * as publicExports from "../index";
describe("/ssr public exports", () => {
  it("should not include a breaking change", () => {
    expect(publicExports).toMatchSnapshot();
  });
});
//# sourceMappingURL=exports.test.js.map