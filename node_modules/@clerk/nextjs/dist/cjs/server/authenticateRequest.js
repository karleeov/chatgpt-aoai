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
var authenticateRequest_exports = {};
__export(authenticateRequest_exports, {
  authenticateRequest: () => authenticateRequest,
  handleInterstitialState: () => handleInterstitialState,
  handleUnknownState: () => handleUnknownState
});
module.exports = __toCommonJS(authenticateRequest_exports);
var import_server = require("next/server");
var import_clerkClient = require("./clerkClient");
var import_utils = require("./utils");
var import_withClerkMiddleware = require("./withClerkMiddleware");
const authenticateRequest = async (req, opts) => {
  const { isSatellite, domain, signInUrl, proxyUrl } = (0, import_utils.handleMultiDomainAndProxy)(req, opts);
  return await import_clerkClient.clerkClient.authenticateRequest({
    ...opts,
    apiKey: opts.apiKey || import_clerkClient.API_KEY,
    secretKey: opts.secretKey || import_clerkClient.SECRET_KEY,
    frontendApi: opts.frontendApi || import_clerkClient.FRONTEND_API,
    publishableKey: opts.publishableKey || import_clerkClient.PUBLISHABLE_KEY,
    isSatellite,
    domain,
    signInUrl,
    proxyUrl,
    request: req
  });
};
const handleUnknownState = (requestState) => {
  const response = (0, import_utils.apiEndpointUnauthorizedNextResponse)();
  (0, import_withClerkMiddleware.decorateResponseWithObservabilityHeaders)(response, requestState);
  return response;
};
const handleInterstitialState = (requestState, opts) => {
  const response = new import_server.NextResponse(
    import_clerkClient.clerkClient.localInterstitial({
      frontendApi: opts.frontendApi || import_clerkClient.FRONTEND_API,
      publishableKey: opts.publishableKey || import_clerkClient.PUBLISHABLE_KEY,
      clerkJSUrl: import_clerkClient.CLERK_JS_URL,
      clerkJSVersion: import_clerkClient.CLERK_JS_VERSION,
      proxyUrl: requestState.proxyUrl,
      isSatellite: requestState.isSatellite,
      domain: requestState.domain,
      debugData: (0, import_clerkClient.debugRequestState)(requestState),
      signInUrl: requestState.signInUrl
    }),
    {
      status: 401,
      headers: {
        "content-type": "text/html"
      }
    }
  );
  (0, import_withClerkMiddleware.decorateResponseWithObservabilityHeaders)(response, requestState);
  return response;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authenticateRequest,
  handleInterstitialState,
  handleUnknownState
});
//# sourceMappingURL=authenticateRequest.js.map