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
var requireAuth_exports = {};
__export(requireAuth_exports, {
  requireAuth: () => requireAuth
});
module.exports = __toCommonJS(requireAuth_exports);
var import_clerk_sdk_node = require("@clerk/clerk-sdk-node");
var import_server = require("../server");
var import_utils = require("./utils");
function requireAuth(handler, options) {
  return async (req, res) => {
    try {
      await (0, import_utils.runMiddleware)(
        req,
        res,
        (0, import_clerk_sdk_node.createClerkExpressRequireAuth)({
          clerkClient: import_server.clerkClient,
          apiUrl: import_server.API_URL,
          frontendApi: import_server.FRONTEND_API,
          publishableKey: import_server.PUBLISHABLE_KEY
        })(options)
      );
      return handler(req, res);
    } catch (error) {
      const errorData = error.data || { error: error.message };
      res.statusCode = error.statusCode || 401;
      res.json ? res.json(errorData) : res.send(errorData);
      res.end();
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  requireAuth
});
//# sourceMappingURL=requireAuth.js.map