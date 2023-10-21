import type { ClerkMiddlewareOptions, WithAuthProp } from '@clerk/clerk-sdk-node';
import type { NextApiRequest, NextApiResponse } from 'next';
type NextApiHandlerWithAuth<T = any> = (req: WithAuthProp<NextApiRequest>, res: NextApiResponse<T>) => void | Promise<void>;
export declare function withAuth(handler: NextApiHandlerWithAuth, options?: ClerkMiddlewareOptions): NextApiHandlerWithAuth;
export {};
//# sourceMappingURL=withAuth.d.ts.map