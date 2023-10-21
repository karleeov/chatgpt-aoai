import { Clerk } from '@clerk/backend';
export type { ClerkMiddleware, ClerkMiddlewareOptions, LooseAuthProp, RequireAuthProp, StrictAuthProp, WithAuthProp, } from '@clerk/clerk-sdk-node';
import { clerkClient } from '../server/clerkClient';
export * from '@clerk/backend';
declare const createClerkClient: typeof Clerk;
export { requireAuth } from './requireAuth';
export { withAuth } from './withAuth';
declare const users: import("@clerk/backend/dist/types/api/endpoints").UserAPI, smsMessages: import("@clerk/backend/dist/types/api/endpoints").SMSMessageAPI, sessions: import("@clerk/backend/dist/types/api/endpoints").SessionAPI, emailAddresses: import("@clerk/backend/dist/types/api/endpoints").EmailAddressAPI, phoneNumbers: import("@clerk/backend/dist/types/api/endpoints").PhoneNumberAPI, emails: import("@clerk/backend/dist/types/api/endpoints").EmailAPI, invitations: import("@clerk/backend/dist/types/api/endpoints").InvitationAPI, organizations: import("@clerk/backend/dist/types/api/endpoints").OrganizationAPI, clients: import("@clerk/backend/dist/types/api/endpoints").ClientAPI, allowlistIdentifiers: import("@clerk/backend/dist/types/api/endpoints").AllowlistIdentifierAPI;
export { users, smsMessages, sessions, emailAddresses, phoneNumbers, emails, invitations, organizations, clients, allowlistIdentifiers, createClerkClient, clerkClient, };
//# sourceMappingURL=index.d.ts.map