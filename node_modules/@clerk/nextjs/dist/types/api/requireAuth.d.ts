import type { ClerkMiddlewareOptions, RequireAuthProp } from '@clerk/clerk-sdk-node';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
type NextApiHandlerRequireAuth<T = any> = (req: RequireAuthProp<NextApiRequest>, res: NextApiResponse<T>) => void | Promise<void>;
export declare function requireAuth(handler: NextApiHandlerRequireAuth, options?: ClerkMiddlewareOptions): NextApiHandler;
export {};
//# sourceMappingURL=requireAuth.d.ts.map