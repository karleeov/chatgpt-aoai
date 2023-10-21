import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { RequestState } from './clerkClient';
import type { WithAuthOptions } from './types';
export declare const authenticateRequest: (req: NextRequest, opts: WithAuthOptions) => Promise<RequestState>;
export declare const handleUnknownState: (requestState: RequestState) => NextResponse<null>;
export declare const handleInterstitialState: (requestState: RequestState, opts: WithAuthOptions) => NextResponse<unknown>;
//# sourceMappingURL=authenticateRequest.d.ts.map