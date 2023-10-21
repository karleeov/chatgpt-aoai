import { requireAuth, withAuth } from "../api";
import { clerkClient } from "../server";
export * from "../api";
const clerkApi = clerkClient;
const requireEdgeMiddlewareAuth = requireAuth;
const withEdgeMiddlewareAuth = withAuth;
export {
  clerkApi,
  clerkClient,
  requireEdgeMiddlewareAuth,
  withEdgeMiddlewareAuth
};
//# sourceMappingURL=index.js.map