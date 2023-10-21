import type { GetServerSidePropsContext } from 'next';
import type { AuthData, ContextWithAuth } from '../types';
/**
 * Inject `auth`, `user` and `session` properties into ctx.request
 * @internal
 */
export declare function injectAuthIntoRequest(ctx: GetServerSidePropsContext, authData: AuthData): ContextWithAuth;
//# sourceMappingURL=injectAuthIntoRequest.d.ts.map