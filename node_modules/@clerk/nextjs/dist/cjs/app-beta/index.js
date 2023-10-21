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
var app_beta_exports = {};
__export(app_beta_exports, {
  ClerkProvider: () => import_ClerkProvider.ClerkProvider,
  CreateOrganization: () => import_ui_components.CreateOrganization,
  OrganizationProfile: () => import_ui_components.OrganizationProfile,
  OrganizationSwitcher: () => import_ui_components.OrganizationSwitcher,
  SignIn: () => import_ui_components.SignIn,
  SignUp: () => import_ui_components.SignUp,
  SignedIn: () => import_control_components.SignedIn,
  SignedOut: () => import_control_components.SignedOut,
  UserButton: () => import_ui_components.UserButton,
  UserProfile: () => import_ui_components.UserProfile,
  auth: () => import_auth.auth,
  clerkClient: () => import_clerkClient.clerkClient,
  currentUser: () => import_currentUser.currentUser
});
module.exports = __toCommonJS(app_beta_exports);
var import_auth = require("./auth");
var import_currentUser = require("./currentUser");
var import_ClerkProvider = require("./ClerkProvider");
var import_control_components = require("./control-components");
var import_ui_components = require("./client/ui-components");
var import_clerkClient = require("./clerkClient");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClerkProvider,
  CreateOrganization,
  OrganizationProfile,
  OrganizationSwitcher,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
  auth,
  clerkClient,
  currentUser
});
//# sourceMappingURL=index.js.map