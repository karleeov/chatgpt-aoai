import { clerkClient } from "../../server/clerkClient";
import { auth } from "./auth";
async function currentUser() {
  const { userId } = auth();
  return userId ? clerkClient.users.getUser(userId) : null;
}
export {
  currentUser
};
//# sourceMappingURL=currentUser.js.map