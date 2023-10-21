import { createClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import { API_URL, clerkClient, FRONTEND_API, PUBLISHABLE_KEY } from "../server";
import { runMiddleware } from "./utils";
function withAuth(handler, options) {
  return async (req, res) => {
    await runMiddleware(
      req,
      res,
      createClerkExpressWithAuth({
        clerkClient,
        frontendApi: FRONTEND_API,
        apiUrl: API_URL,
        publishableKey: PUBLISHABLE_KEY
      })(options)
    );
    return handler(req, res);
  };
}
export {
  withAuth
};
//# sourceMappingURL=withAuth.js.map