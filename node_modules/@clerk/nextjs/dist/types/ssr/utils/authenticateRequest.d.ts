import type { GetServerSidePropsContext } from 'next';
import type { WithServerSideAuthOptions } from '../types';
/**
 * @internal
 */
export declare function authenticateRequest(ctx: GetServerSidePropsContext, opts?: WithServerSideAuthOptions): Promise<import("@clerk/backend/dist/types/tokens/authStatus").RequestState>;
//# sourceMappingURL=authenticateRequest.d.ts.map