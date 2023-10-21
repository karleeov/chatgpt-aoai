import { createClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { API_URL, clerkClient, FRONTEND_API, PUBLISHABLE_KEY } from "../server";
import { runMiddleware } from "./utils";
function requireAuth(handler, options) {
  return async (req, res) => {
    try {
      await runMiddleware(
        req,
        res,
        createClerkExpressRequireAuth({
          clerkClient,
          apiUrl: API_URL,
          frontendApi: FRONTEND_API,
          publishableKey: PUBLISHABLE_KEY
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
export {
  requireAuth
};
//# sourceMappingURL=requireAuth.js.map