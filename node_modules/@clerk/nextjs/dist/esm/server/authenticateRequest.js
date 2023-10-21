import { NextResponse } from "next/server";
import {
  API_KEY,
  CLERK_JS_URL,
  CLERK_JS_VERSION,
  clerkClient,
  debugRequestState,
  FRONTEND_API,
  PUBLISHABLE_KEY,
  SECRET_KEY
} from "./clerkClient";
import { apiEndpointUnauthorizedNextResponse, handleMultiDomainAndProxy } from "./utils";
import { decorateResponseWithObservabilityHeaders } from "./withClerkMiddleware";
const authenticateRequest = async (req, opts) => {
  const { isSatellite, domain, signInUrl, proxyUrl } = handleMultiDomainAndProxy(req, opts);
  return await clerkClient.authenticateRequest({
    ...opts,
    apiKey: opts.apiKey || API_KEY,
    secretKey: opts.secretKey || SECRET_KEY,
    frontendApi: opts.frontendApi || FRONTEND_API,
    publishableKey: opts.publishableKey || PUBLISHABLE_KEY,
    isSatellite,
    domain,
    signInUrl,
    proxyUrl,
    request: req
  });
};
const handleUnknownState = (requestState) => {
  const response = apiEndpointUnauthorizedNextResponse();
  decorateResponseWithObservabilityHeaders(response, requestState);
  return response;
};
const handleInterstitialState = (requestState, opts) => {
  const response = new NextResponse(
    clerkClient.localInterstitial({
      frontendApi: opts.frontendApi || FRONTEND_API,
      publishableKey: opts.publishableKey || PUBLISHABLE_KEY,
      clerkJSUrl: CLERK_JS_URL,
      clerkJSVersion: CLERK_JS_VERSION,
      proxyUrl: requestState.proxyUrl,
      isSatellite: requestState.isSatellite,
      domain: requestState.domain,
      debugData: debugRequestState(requestState),
      signInUrl: requestState.signInUrl
    }),
    {
      status: 401,
      headers: {
        "content-type": "text/html"
      }
    }
  );
  decorateResponseWithObservabilityHeaders(response, requestState);
  return response;
};
export {
  authenticateRequest,
  handleInterstitialState,
  handleUnknownState
};
//# sourceMappingURL=authenticateRequest.js.map