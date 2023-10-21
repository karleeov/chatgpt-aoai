import type { RequestState } from '@clerk/backend';
import type { NextMiddleware } from 'next/server';
import { NextResponse } from 'next/server';
import type { WithAuthOptions } from './types';
export interface WithClerkMiddleware {
    (handler: NextMiddleware, opts?: WithAuthOptions): NextMiddleware;
    (): NextMiddleware;
}
export declare const decorateResponseWithObservabilityHeaders: (res: NextResponse, requestState: RequestState) => void;
/**
 * @deprecated withClerkMiddleware has been deprecated in favor of `authMiddleware`.
 * For more details, consult the middleware documentation: https://clerk.com/docs/nextjs/middleware
 */
export declare const withClerkMiddleware: WithClerkMiddleware;
//# sourceMappingURL=withClerkMiddleware.d.ts.map