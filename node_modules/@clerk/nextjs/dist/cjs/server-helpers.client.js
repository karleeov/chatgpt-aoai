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
var server_helpers_client_exports = {};
__export(server_helpers_client_exports, {
  auth: () => auth,
  authMiddleware: () => authMiddleware,
  clerkClient: () => clerkClient,
  currentUser: () => currentUser,
  getAuth: () => getAuth,
  redirectToSignIn: () => redirectToSignIn,
  redirectToSignUp: () => redirectToSignUp,
  withClerkMiddleware: () => withClerkMiddleware
});
module.exports = __toCommonJS(server_helpers_client_exports);
const mockImplementation = (name) => {
  throw new Error(`${name} can only be used in a server environment.`);
};
const auth = () => mockImplementation("auth()");
const currentUser = () => mockImplementation("currentUser()");
const authMiddleware = () => mockImplementation("authMiddleware()");
const getAuth = () => mockImplementation("getAuth()");
const clerkClient = () => mockImplementation("clerkClient()");
const withClerkMiddleware = () => mockImplementation("withClerkMiddleware()");
const redirectToSignIn = () => mockImplementation("redirectToSignIn()");
const redirectToSignUp = () => mockImplementation("redirectToSignUp()");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  auth,
  authMiddleware,
  clerkClient,
  currentUser,
  getAuth,
  redirectToSignIn,
  redirectToSignUp,
  withClerkMiddleware
});
//# sourceMappingURL=server-helpers.client.js.map