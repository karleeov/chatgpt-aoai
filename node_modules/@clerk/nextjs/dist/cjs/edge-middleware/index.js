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
var edge_middleware_exports = {};
__export(edge_middleware_exports, {
  clerkApi: () => clerkApi,
  clerkClient: () => import_server.clerkClient,
  requireEdgeMiddlewareAuth: () => requireEdgeMiddlewareAuth,
  withEdgeMiddlewareAuth: () => withEdgeMiddlewareAuth
});
module.exports = __toCommonJS(edge_middleware_exports);
var import_api = require("../api");
var import_server = require("../server");
__reExport(edge_middleware_exports, require("../api"), module.exports);
const clerkApi = import_server.clerkClient;
const requireEdgeMiddlewareAuth = import_api.requireAuth;
const withEdgeMiddlewareAuth = import_api.withAuth;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clerkApi,
  clerkClient,
  requireEdgeMiddlewareAuth,
  withEdgeMiddlewareAuth,
  ...require("../api")
});
//# sourceMappingURL=index.js.map