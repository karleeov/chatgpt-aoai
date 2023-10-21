import { Clerk } from "@clerk/backend";
import { clerkClient } from "../server/clerkClient";
export * from "@clerk/backend";
const createClerkClient = Clerk;
import { requireAuth } from "./requireAuth";
import { withAuth } from "./withAuth";
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
} = clerkClient;
export {
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
  withAuth
};
//# sourceMappingURL=index.js.map