"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var withAuth_exports = {};
__export(withAuth_exports, {
  withAuth: () => withAuth
});
module.exports = __toCommonJS(withAuth_exports);
var import_clerk_sdk_node = require("@clerk/clerk-sdk-node");
var import_server = require("../server");
var import_utils = require("./utils");
function withAuth(handler, options) {
  return async (req, res) => {
    await (0, import_utils.runMiddleware)(
      req,
      res,
      (0, import_clerk_sdk_node.createClerkExpressWithAuth)({
        clerkClient: import_server.clerkClient,
        frontendApi: import_server.FRONTEND_API,
        apiUrl: import_server.API_URL,
        publishableKey: import_server.PUBLISHABLE_KEY
      })(options)
    );
    return handler(req, res);
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  withAuth
});
//# sourceMappingURL=withAuth.js.map