import type { GetServerSidePropsResult } from 'next';
import type { WithServerSideAuthCallback, WithServerSideAuthOptions, WithServerSideAuthResult } from './types';
interface WithServerSideAuth {
    <CallbackReturn extends GetServerSidePropsResult<any> | Promise<GetServerSidePropsResult<any>>, Options extends WithServerSideAuthOptions>(callback: WithServerSideAuthCallback<CallbackReturn, Options>, opts?: Options): WithServerSideAuthResult<CallbackReturn>;
    (opts?: WithServerSideAuthOptions): WithServerSideAuthResult<void>;
}
/**
 * @deprecated The /ssr path is deprecated and will be removed in the next major release.
 * Use the exports from /server instead
 */
export declare const withServerSideAuth: WithServerSideAuth;
export {};
//# sourceMappingURL=withServerSideAuth.d.ts.map