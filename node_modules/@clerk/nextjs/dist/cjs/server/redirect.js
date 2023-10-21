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
var redirect_exports = {};
__export(redirect_exports, {
  redirectToSignIn: () => redirectToSignIn,
  redirectToSignUp: () => redirectToSignUp
});
module.exports = __toCommonJS(redirect_exports);
var import_backend = require("@clerk/backend");
var import_server = require("next/server");
var import_utils = require("../utils");
var import_clerkClient = require("./clerkClient");
const redirectAdapter = (url) => {
  const res = import_server.NextResponse.redirect(url);
  return (0, import_utils.setHeader)(res, import_backend.constants.Headers.ClerkRedirectTo, "true");
};
const { redirectToSignIn, redirectToSignUp } = (0, import_backend.redirect)({
  redirectAdapter,
  signInUrl: import_clerkClient.SIGN_IN_URL,
  signUpUrl: import_clerkClient.SIGN_UP_URL,
  publishableKey: import_clerkClient.PUBLISHABLE_KEY,
  frontendApi: import_clerkClient.FRONTEND_API
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  redirectToSignIn,
  redirectToSignUp
});
//# sourceMappingURL=redirect.js.map