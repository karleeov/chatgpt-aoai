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
export {
  auth,
  authMiddleware,
  clerkClient,
  currentUser,
  getAuth,
  redirectToSignIn,
  redirectToSignUp,
  withClerkMiddleware
};
//# sourceMappingURL=server-helpers.client.js.map