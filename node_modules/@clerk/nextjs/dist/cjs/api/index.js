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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var api_exports = {};
__export(api_exports, {
  allowlistIdentifiers: () => allowlistIdentifiers,
  clerkClient: () => import_clerkClient.clerkClient,
  clients: () => clients,
  createClerkClient: () => createClerkClient,
  emailAddresses: () => emailAddresses,
  emails: () => emails,
  invitations: () => invitations,
  organizations: () => organizations,
  phoneNumbers: () => phoneNumbers,
  requireAuth: () => import_requireAuth.requireAuth,
  sessions: () => sessions,
  smsMessages: () => smsMessages,
  users: () => users,
  withAuth: () => import_withAuth.withAuth
});
module.exports = __toCommonJS(api_exports);
var import_backend = require("@clerk/backend");
var import_clerkClient = require("../server/clerkClient");
__reExport(api_exports, require("@clerk/backend"), module.exports);
var import_requireAuth = require("./requireAuth");
var import_withAuth = require("./withAuth");
const createClerkClient = import_backend.Clerk;
const {
  users,
  smsMessages,
  sessions,
  emailAddresses,
  phoneNumbers,
  emails,
  invitations,
  organizations,
  clients,
  allowlistIdentifiers
} = import_clerkClient.clerkClient;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowlistIdentifiers,
  clerkClient,
  clients,
  createClerkClient,
  emailAddresses,
  emails,
  invitations,
  organizations,
  phoneNumbers,
  requireAuth,
  sessions,
  smsMessages,
  users,
  withAuth,
  ...require("@clerk/backend")
});
//# sourceMappingURL=index.js.map